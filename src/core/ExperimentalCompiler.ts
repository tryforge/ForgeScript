import { inspect } from "util"
import { CompiledFunction } from "../structures/@internal/CompiledFunction"
import { ErrorType, ForgeError } from "../structures/forge/ForgeError"
import { Collection } from "discord.js"

export interface IRawField {
    condition?: boolean
    rest?: boolean
}

export interface IRawFunctionFieldDefinition {
    required: boolean
    fields: IRawField[]
}

export interface IRawFunction {
    aliases: null | (string | RegExp)[]
    name: string
    /**
     * If undefined, function has no fields.
     * If present and required true, fields are required.
     * If false, fields are not required.
     */
    args: IRawFunctionFieldDefinition | null
}

export type WrappedCode = (args: unknown[]) => string
export type WrappedConditionCode = (lhs: unknown, rhs: unknown) => boolean

export interface ICompiledFunctionField {
    value: string
    functions: ICompiledFunction[]
    resolve: WrappedCode
}

export enum OperatorType {
    Eq = "==",
    NotEq = "!=",
    Lte = "<=",
    Gte = ">=",
    Gt = ">",
    Lt = "<",
    None = "unknown",
}

export const Operators = new Set<OperatorType>(Object.values(OperatorType) as OperatorType[])

export const Conditions: Record<OperatorType, WrappedConditionCode> = {
    unknown: (lhs, rhs) => lhs === "true",
    "!=": (lhs, rhs) => lhs !== rhs,
    "==": (lhs, rhs) => lhs === rhs,
    "<": (lhs, rhs) => Number(lhs) < Number(rhs),
    "<=": (lhs, rhs) => Number(lhs) <= Number(rhs),
    ">": (lhs, rhs) => Number(lhs) > Number(rhs),
    ">=": (lhs, rhs) => Number(lhs) >= Number(rhs),
}

export interface ICompiledFunctionConditionField {
    op: OperatorType
    lhs: ICompiledFunctionField
    rhs?: ICompiledFunctionField
    resolve: WrappedConditionCode
}

export interface ILocation {
    line: number
    column: number
}

export interface ICompiledFunction {
    id: string
    name: string

    /**
     * Whether output is not desirable
     */
    negated: boolean

    fields: null | (ICompiledFunctionField | ICompiledFunctionConditionField)[]
}

export interface ICompilationResult {
    code: string
    functions: ICompiledFunction[]
    resolve: WrappedCode
}

export interface IExtendedCompilationResult extends Omit<ICompilationResult, "functions"> {
    functions: CompiledFunction[]
}

export interface IRawFunctionMatch {
    index: number
    length: number
    negated: boolean
    fn: IRawFunction
}

/**
 * REWRITE NEEDED
 */
export class ExperimentalCompiler {
    public static Syntax = {
        Open: "[",
        Close: "]",
        Escape: "\\",
        Negation: "!",
        Separator: ";"
    }

    private static SystemRegex = /(\\+)?\[SYSTEM_FUNCTION\(\d+\)\]/gm
    private static Regex: RegExp
    private static InvalidCharRegex = /(\\|\${|`)/g
    private static Functions = new Collection<string | RegExp, IRawFunction>()

    private id = 0
    private matches: Array<IRawFunctionMatch>
    private matchIndex = 0
    private index = 0
    
    private outputFunctions = new Array<ICompiledFunction>()
    private outputCode = ""

    private constructor(private readonly path?: null | string, private readonly code?: string) {
        if (code) {
            this.matches = Array.from(code.matchAll(ExperimentalCompiler.Regex)).map((x) => ({
                index: x.index!,
                negated: !!x[1],
                length: x[0].length,
                fn: this.getFunction(x[2])
            }))
        } else this.matches = []
    }

    public compile(): ICompilationResult {
        if (this.matches.length !== 0) {
            // Loop while functions are unmatched
            let match: IRawFunctionMatch
            while ((match = this.match) !== undefined) {
                const isEscaped = this.code![match.index - 1] === ExperimentalCompiler.Syntax.Escape
                if (isEscaped)  {
                    this.outputCode += this.code!.slice(this.index, (this.index = match.index) - 1)
                    this.matchIndex++
                    continue
                } else {
                    this.outputCode += this.code!.slice(this.index, this.index = match.index)
                    const fn = this.parseFunction()
                    this.outputCode += fn.id
                    this.outputFunctions.push(fn)
                }
            }

            this.outputCode += this.code!.slice(this.index)
        } 
        else this.outputCode = this.code ?? ""

        return {
            code: this.outputCode,
            functions: this.outputFunctions,
            resolve: this.wrap(this.outputCode)
        }
    }

    private parseFunction() {
        // Skip this match already
        const match = this.matches[this.matchIndex++]

        // Skip function
        this.skip(match.length)

        const hasFields = this.code![this.index] === ExperimentalCompiler.Syntax.Open
        if (!hasFields && match.fn.args?.required) {
            this.error(`Function ${match.fn.name} requires brackets`)
        } else if (!hasFields) {
            return this.prepareFunction(match, null)
        }

        // Skip [
        this.skip(1)

        const fields = new Array<ICompiledFunctionField | ICompiledFunctionConditionField>()

        // Field parsing 
        for (let i = 0, len = match.fn.args!.fields.length;i < len;i++) {
            let isLast = i + 1 === len

            const field = match.fn.args!.fields[i]
            if (!field.rest) {
                fields.push(this.parseAnyField(match, field))
            } else {
                for (;;) {
                    fields.push(this.parseAnyField(match, field))
                    if (!this.skipIf(ExperimentalCompiler.Syntax.Separator))
                        break
                }
            }

            const isSeparator = this.char() === ExperimentalCompiler.Syntax.Separator
            if (!isSeparator)
                break
            else if (isLast && isSeparator) {
                this.error(`Function ${match.fn.name} expects ${match.fn.args?.fields.length} arguments at most`)
            }
        }

        // Skip ]
        this.skip(1)

        return this.prepareFunction(match, fields)
    }

    private parseConditionField(ref: IRawFunctionMatch): ICompiledFunctionConditionField {
        const data = {

        } as ICompiledFunctionConditionField

        const functions = new Array<ICompiledFunction>()
        let fieldValue = ""
        let closedGracefully = false

        const match = this.match
        let char: string | undefined
        while ((char = this.char()) !== undefined) {
            const isSeparator = char === ExperimentalCompiler.Syntax.Separator
            const isClosure = char === ExperimentalCompiler.Syntax.Close
            const isEscape = char === ExperimentalCompiler.Syntax.Escape
            
            if (isEscape) {
                this.index++
                fieldValue += this.char()
                
                if (match?.index === this.index) 
                    this.matchIndex++
                
                this.index++
                continue
            }

            if (isClosure || isSeparator) {
                closedGracefully = true
                break
            }

            if (match?.index === this.index) {
                const fn = this.parseFunction()
                functions.push(fn)
                fieldValue += fn.id
                continue
            }

            if (data.op === undefined) {
                const possibleOperator = ([char + this.peek()!, char] as OperatorType[]).find((x) => Operators.has(x))
                if (possibleOperator) {
                    data.op = possibleOperator as OperatorType
                    data.lhs = {
                        functions: [...functions],
                        resolve: this.wrap(fieldValue),
                        value: fieldValue   
                    }

                    fieldValue = ""
                    functions.length = 0
                    this.index += data.op.length
                    continue
                }
            }

            fieldValue += char
            this.index++
        }

        if (!closedGracefully)
            this.error(`Function ${ref.fn.name} is missing brace closure`)

        const out: ICompiledFunctionField = {
            functions,
            value: fieldValue,
            resolve: this.wrap(fieldValue)
        }

        if (data.op)
            data.rhs = out
        else
            data.lhs = out

        data.op ??= OperatorType.None

        return data
    }

    private parseNormalField(ref: IRawFunctionMatch): ICompiledFunctionField {
        const functions = new Array<ICompiledFunction>()
        let fieldValue = ""
        let closedGracefully = false

        const match = this.match
        let char: string | undefined
        while ((char = this.char()) !== undefined) {
            const isSeparator = char === ExperimentalCompiler.Syntax.Separator
            const isClosure = char === ExperimentalCompiler.Syntax.Close
            const isEscape = char === ExperimentalCompiler.Syntax.Escape
            
            if (isEscape) {
                this.index++
                fieldValue += this.char()
                
                if (match?.index === this.index) 
                    this.matchIndex++
                
                this.index++
                continue
            }

            if (isClosure || isSeparator) {
                closedGracefully = true
                break
            }

            if (match?.index === this.index) {
                const fn = this.parseFunction()
                functions.push(fn)
                fieldValue += fn.id
                continue
            }

            fieldValue += char
            this.index++
        }

        if (!closedGracefully)
            this.error(`Function ${ref.fn.name} is missing brace closure`)

        return {
            resolve: this.wrap(fieldValue),
            functions,
            value: fieldValue
        }
    }

    private parseAnyField(ref: IRawFunctionMatch, field: IRawField): ICompiledFunctionField | ICompiledFunctionConditionField {
        if (field.condition) {
            return this.parseConditionField(ref)
        } else {
            return this.parseNormalField(ref)
        }
    }

    private prepareFunction(match: IRawFunctionMatch, fields: null | (ICompiledFunctionField | ICompiledFunctionConditionField)[]): ICompiledFunction {
        return {
            id: this.getNextId(),
            fields,
            name: match.fn.name,
            negated: match.negated
        }
    }

    private skip(n: number) {
        return this.moveTo(n + this.index)
    }

    private skipIf(char: string) {
        if (char === this.code![this.index])
            return this.skip(1), true
        return false
    }

    private get match() {
        return this.matches[this.matchIndex]
    }

    private getFunction(str: string) {
        const fn = str.toLowerCase()
        return ExperimentalCompiler.Functions.get(`$${fn}`)! ?? 
            ExperimentalCompiler.Functions.find(x => x.aliases?.some(x => typeof x === "string" ? x === `$${fn}` : x.test(fn)) ?? false) ??
            this.error(`Function ${fn} is not registered.`)
    }

    private error(str: string): never {
        const { line, column } = this.locate(this.index)
        throw new ForgeError(null, ErrorType.CompilerError, str, line, column, this.path ?? "index file")
    }

    private locate(index: number): ILocation {
        const data: ILocation = {
            column: 0,
            line: 1
        }

        for (let i = 0;i < index;i++) {
            const char = this.code![i]
            if (char === "\n")
                data.line++, data.column = 0
            else
                data.column++
        }

        return data
    }

    private back() {
        return this.code![this.index - 1]
    }

    private wrapCondition(op: OperatorType) {
        return Conditions[op]
    }

    private wrap(code: string) {
        let i = 0
        const gencode = code.replace(ExperimentalCompiler.InvalidCharRegex, "\\$1").replace(ExperimentalCompiler.SystemRegex, () => {
            return "${args[" + i++ + "] ?? ''}"
        })

        console.log(gencode)

        return new Function("args", "return `" + gencode + "`") as WrappedCode
    }

    private moveTo(index: number) {
        this.index = index
    }

    private getNextId() {
        return `[SYSTEM_FUNCTION(${++this.id})]`
    }

    private char(): undefined | string {
        return this.code![this.index]
    }

    private peek(): undefined | string {
        return this.code![this.index + 1]
    }

    private next(): undefined | string {
        return this.code![this.index++]
    }

    public static setFunctions(fns: IRawFunction[]) {
        fns.map((x) => {
            this.Functions.set(x.name.toLowerCase(), x)
            x.aliases?.filter(x => typeof x === "string")?.map(alias => this.Functions.set((alias as string).toLowerCase(), x))
        })

        const mapped = new Array<string>()
        for (const [, fn] of this.Functions) {
            mapped.push(fn.name)
            if (fn.aliases?.length)
                mapped.push(...fn.aliases.map(x => typeof x === "string" ? x : x.source))
        }

        this.Regex = new RegExp(
            `\\$(\\!)?(${
                mapped
                    .map(x => x.startsWith("$") ? x.slice(1).toLowerCase() : x)
                    .sort((x, y) => y.length - x.length)
                    .join("|")})`,
            "gim"
        )
    }

    public static compile(code?: string, path?: string | null): IExtendedCompilationResult {
        const result = new this(path, code).compile()
        return {
            ...result,
            functions: result.functions.map((x) => new CompiledFunction(x)),
        }
    }

    public static setSyntax(syntax: typeof this.Syntax) {
        Reflect.set(ExperimentalCompiler, "Syntax", syntax)
    }
}
import { inspect } from "util"
import { CompiledFunction } from "../structures/CompiledFunction"
import { ErrorType, ForgeError } from "../structures/ForgeError"
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

export interface IRawFunctionMatch extends IRawFunction {
    index: number
    negated: boolean
}

/**
 * REWRITE NEEDED
 */
export class Compiler {
    public static Syntax = {
        Open: "[",
        Close: "]",
        Escape: "\\",
        Negation: "!",
        Separator: ";"
    }

    private static SystemRegex = /(\\+)?\[SYSTEM_FUNCTION\(\d+\)\]/gm
    private static Regex: RegExp
    private static InvalidCharRegex = /(\$\{|`)/g
    private static Functions = new Collection<string, IRawFunction>()

    private id = 0
    private matches: Array<IRawFunctionMatch>

    private index = 0

    private constructor(private readonly path?: string, private readonly code?: string) {
        if (code) {
            this.matches = Array.from(code.matchAll(Compiler.Regex)).map((x) => ({
                index: x.index!,
                negated: !!x[1],
                ...(Compiler.Functions.get(`$${x[2]}`) ?? Compiler.Functions.find(fn => fn.name.toLowerCase() === `$${x[2].toLowerCase()}`))!,
            }))
        } else this.matches = []
    }

    private compile(): ICompilationResult {
        if (!this.code || this.matches.length === 0)
            return {
                code: this.code ?? "",
                resolve: this.wrap(this.code ?? ""),
                functions: [],
            }

        let out = ""
        const functions = new Array<ICompiledFunction>()

        while (this.matches.length !== 0) {
            const match = this.matches.shift()!

            let escaped = false

            while (match.index !== this.index) {
                const char = this.next()
                const isEscape = char === Compiler.Syntax.Escape

                if (!escaped && isEscape) {
                    escaped = true
                    continue
                }

                escaped = false
                out += char
            }

            if (escaped) continue

            const fn = this.parseFunction(match)
            out += fn.id
            functions.push(fn)
        }

        if (this.index !== this.code.length) out += this.code.slice(this.index)

        return {
            code: out,
            functions,
            resolve: this.wrap(out),
        }
    }

    private parseFunction(match: IRawFunctionMatch): ICompiledFunction {
        this.moveTo(match.index + match.name.length + (match.negated as unknown as number))

        const char = this.char()
        const usesFields = char === Compiler.Syntax.Open

        const name = match.name
        const id = this.getNextId()

        if (match.args === null || (!usesFields && !match.args.required)) {
            // Increment index if escape character, just to skip it.
            if (char === Compiler.Syntax.Escape) this.index++

            return {
                id,
                name,
                negated: match.negated,
                fields: null,
            }
        }

        if (match.args.required && !usesFields) {
            this.error(`Function ${match.name} requires brackets`)
        }

        const fields = new Array<ICompiledFunctionConditionField | ICompiledFunctionField>()

        // Skip brace open
        this.index++

        for (let i = 0, len = match.args.fields.length; i < len; i++) {
            const isLast = i + 1 === match.args.fields.length
            const arg = match.args.fields[i]

            if (arg.rest === true) {
                for (;;) {
                    fields.push(this.parseField(match, arg))
                    if (this.char() === Compiler.Syntax.Separator) this.index++
                    else if (this.char() === Compiler.Syntax.Close) break
                }
            } else {
                fields.push(this.parseField(match, arg, isLast))
                if (this.char() === Compiler.Syntax.Separator) {
                    this.index++
                    if (!isLast) continue
                }
            }

            const old = this.char()
            if (isLast) {
                if (old !== Compiler.Syntax.Close) {
                    this.error(`Function ${match.name} expects ${match.args.fields.length} arguments at most`)
                }
            } else if (old === Compiler.Syntax.Close) break
        }

        // Skip closure
        this.index++

        return {
            id,
            name,
            negated: match.negated,
            fields,
        }
    }

    private parseField(
        match: IRawFunctionMatch,
        arg: IRawField,
        requireEndBrace = false
    ): ICompiledFunctionField | ICompiledFunctionConditionField {
        let nextMatch = this.matches[0] as IRawFunctionMatch | undefined

        const condition: Partial<ICompiledFunctionConditionField> = {}

        let value = ""
        const functions = new Array<ICompiledFunction>()

        let braceClosure = false
        let escaped = false

        for (;;) {
            const char = this.char()
            if (char === undefined) this.error("Reached end of code and found no brace closure for " + match.name)

            const isEscape = char === Compiler.Syntax.Escape
            const isClosure = char === Compiler.Syntax.Close
            const isSeparator = char === Compiler.Syntax.Separator

            // Mark as escaped
            if (!escaped && isEscape) escaped = true

            if (!escaped) {
                if (isClosure || isSeparator) {
                    if (isClosure) braceClosure = true
                    break
                } else if (arg.condition === true && condition.op === undefined) {
                    const possibleOp = ([char + this.peek()!, char] as OperatorType[]).find((x) => Operators.has(x))
                    if (possibleOp !== undefined) {
                        this.index += possibleOp.length
                        condition.op = possibleOp

                        condition.lhs = {
                            functions: Array.from(functions),
                            value,
                            resolve: this.wrap(value),
                        }

                        functions.length = 0
                        value = ""

                        continue
                    }
                }
            }

            if (nextMatch?.index === this.index) {
                // Remove the function that we are about to parse
                this.matches.shift()

                if (!escaped) {
                    const fn = this.parseFunction(nextMatch)
                    functions.push(fn)
                    value += fn.id
                }

                // Next function to match
                nextMatch = this.matches[0]

                if (!escaped) continue
            }

            if (!isEscape) escaped = false

            this.index++

            if (!escaped) value += char
        }

        const data = {
            functions,
            value,
            resolve: this.wrap(value),
        }

        if (arg.condition === true) {
            condition.op ??= OperatorType.None
            condition.resolve = this.wrapCondition(condition.op)

            if (!condition.lhs) condition.lhs = data
            else if (!condition.rhs) condition.rhs = data

            return condition as ICompiledFunctionConditionField
        }

        return data
    }

    private error(str: string) {
        const { line, column } = this.locate(this.index)
        throw new ForgeError(null, ErrorType.CompilerError, str, line, column, this.path)
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
        const gencode = code.replace(Compiler.InvalidCharRegex, "\\$1").replace(Compiler.SystemRegex, () => {
            return "${args[" + i++ + "] ?? ''}"
        })

        return new Function("args", "return `" + gencode + "`") as WrappedCode
    }

    private moveTo(index: number) {
        let out = ""
        if (this.index >= index) return out

        while (this.index !== index) out += this.next()
        return out
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
        fns.map((x) => this.Functions.set(x.name, x))
        this.Regex = new RegExp(
            `\\$(\\!)?(${Array.from(this.Functions.values())
                .sort((x, y) => y.name.length - x.name.length)
                .map((x) => x.name.slice(1))
                .join("|")})`,
            "gim"
        )
    }

    public static compile(code?: string, path?: string): IExtendedCompilationResult {
        const result = new this(path, code).compile()
        return {
            ...result,
            functions: result.functions.map((x) => new CompiledFunction(x)),
        }
    }

    public static setSyntax(syntax: typeof this.Syntax) {
        Reflect.set(Compiler, "Syntax", syntax)
    }
}

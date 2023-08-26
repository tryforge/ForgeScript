import { CompiledFunction } from "../structures/CompiledFunction"
import { ErrorType, ForgeError } from "../structures/ForgeError"

export interface IRawFunction {
    name: string
    /**
     * If undefined, function has no fields.
     * If true, fields are required.
     * If false, fields are not required.
     */
    fields?: boolean
}

export type WrappedCode = (args: unknown[]) => string

export interface ICompiledFunctionField {
    value: string
    functions: ICompiledFunction[]
    resolve: WrappedCode
}

export interface ICompiledFunction {
    id: string
    name: string
    fields: null | ICompiledFunctionField[]
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
}

export class Compiler {
    public static Syntax = {
        Open: "[",
        Close: "]",
        Escape: "\\",
        Separator: ";"
    }

    private static SystemRegex = /\[SYSTEM_FUNCTION\(\d+\)\]/gm
    private static Regex: RegExp
    private static InvalidCharRegex = /(\$\{|`)/g
    private static Functions = new Map<string, IRawFunction>()
     
    private id = 0
    private matches: Array<IRawFunctionMatch>
    private matchIndex = 0
    private index = 0

    public constructor(private readonly code?: string) {
        if (code) {
            this.matches = Array.from(code.matchAll(Compiler.Regex)).map(x => ({
                index: x.index!,
                ...Compiler.Functions.get(x[0])!
            }))
        } else this.matches = []
    }

    private compile(): ICompilationResult {
        if (!this.code || this.matches.length === 0) return {
            code: this.code ?? "",
            resolve: this.wrap(this.code ?? ""),
            functions: []
        }

        const result: Omit<ICompilationResult, "resolve"> = {
            code: "",
            functions: []
        }

        while (this.matches.length !== this.matchIndex) {
            const match = this.matches[this.matchIndex]
            const isEscaped = this.code[match.index - 1] === Compiler.Syntax.Escape
            const index = match.index - (isEscaped ? 1 : 0)

            result.code += this.code.slice(this.index === 0 ? this.index : this.index + 1, index)
            
            if (isEscaped) {
                this.matchIndex++
                this.moveTo(index)
                continue
            }

            const fn = this.parseFunction(match)
            result.functions.push(fn)
            result.code += fn.id
        }

        if (this.index !== this.code.length) {
            result.code += this.code.slice(this.index + 1)
        }

        return {
            ...result,
            resolve: this.wrap(result.code)
        }
    }

    private wrap(code: string) {
        let i = 0
        const gencode = code.replace(Compiler.InvalidCharRegex, "\\$1").replaceAll(Compiler.SystemRegex, () => "${args[" + i++ + "] ?? ''}")
        return new Function("args", "return `" + gencode + "`") as WrappedCode
    }

    private parseFunction(match: IRawFunctionMatch) {
        this.moveTo(match.index + match.name.length - 1)
        const nextChar = this.peek()

        // Check if function requires braces but were not provided
        if (match.fields === true && nextChar !== Compiler.Syntax.Open) {
            throw new ForgeError(
                null,
                ErrorType.MissingFields,
                match.name
            )
        }

        const id = this.getNextId()

        // Now parse the function, Start with the easiest one, no braces.
        if (match.fields === undefined || nextChar !== Compiler.Syntax.Open) {
            this.matchIndex++
            return this.prepareFunction({
                id,
                fields: null,
                name: match.name
            })
        // Parse if fields were given. 
        } else {
            this.matchIndex++
            return this.prepareFunction({
                id,
                name: match.name,
                fields: this.parseFields(match.name)
            })
        }
    }

    private parseFields(fnName: string) {
        // Skip the brace.
        this.skip(1)

        const fields = new Array<ICompiledFunctionField>()
        const functions = new Array<ICompiledFunction>()

        let inside = ""
        let closed = false

        // Now loop through till we find the brace closure.
        while (this.next() !== undefined) {
            const char = this.char()
            const isEscaped = char === Compiler.Syntax.Escape

            const nextMatch = this.matches[this.matchIndex]

            if (!isEscaped) {
                if (char === Compiler.Syntax.Close || char === Compiler.Syntax.Separator) {
                    fields.push({
                        functions: [...functions],
                        value: inside,
                        resolve: this.wrap(inside)
                    })
    
                    // Drop the text and functions.
                    inside = ""
                    functions.length = 0
    
                    if (char === Compiler.Syntax.Close) {
                        closed = true
                        break
                    }
    
                    continue
                } else if (nextMatch?.index === this.index) {
                    const fn = this.parseFunction(nextMatch)
                    functions.push(fn)
                    inside += fn.id
                    continue
                }
            }

            inside += char
        }

        if (!closed) throw new Error(`Function \`${fnName}\` is missing brace closure.`)

        return fields
    }

    private skip(n: number) {
        this.index += n
    }

    private prepareFunction(func: ICompiledFunction): ICompiledFunction {
        return func
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
        const char = this.code![this.index++]
        return char
    }

    public static setFunctions(fns: IRawFunction[]) {
        fns.map(x => this.Functions.set(x.name, x))
        this.Regex = new RegExp(`(${Array.from(this.Functions.values()).sort((x, y) => y.name.length - x.name.length).map(x => `\\${x.name}`).join("|")})`, "gm")
    }

    public static compile(code?: string): IExtendedCompilationResult {
        const result = new this(code).compile()
        return {
            ...result,
            functions: result.functions.map(x => new CompiledFunction(x))
        }
    }

    public static setSyntax(syntax: typeof Compiler.Syntax) {
        this.Syntax = syntax
    }
}
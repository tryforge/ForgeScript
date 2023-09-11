import { readFileSync } from "fs"
import { BaseCommand, ErrorType, ForgeError, IBaseCommand } from "../structures"

export class FileReader {
    public static readonly Syntax = {
        Open: "[",
        Close: "]",
        Escape: "\\"
    }

    private index = 0

    public constructor(private readonly code: string, private readonly req: any) {

    }

    public static read(fsPath: string, reqPath: string) {
        const str = readFileSync(fsPath, "utf-8")
        const req = fsPath.endsWith(".js") ? require(reqPath) : null
        return new this(str, req).read()
    }

    read(): IBaseCommand<any> | BaseCommand<any> | (IBaseCommand<any> | BaseCommand<any>)[] {
        if (this.req !== null) {
            if ("default" in this.req) return this.req.default
            else if (Array.isArray(this.req)) return this.req
            else if (Object.keys(this.req).length !== 0) return this.req
        }

        let char: string
        const obj: Record<string, unknown> = {}

        while ((char = this.char()) !== undefined) {
            if (this.index === 0 && char === FileReader.Syntax.Open) this.parseProperty(obj)
            else
                this.index++
            if (char === "\n") this.parseProperty(obj)
        }

        return obj as IBaseCommand<any>
    }

    private parseProperty(obj: Record<string, unknown>) {
        if (this.char() === FileReader.Syntax.Escape || this.char() !== FileReader.Syntax.Open) return

        let propName = this.readName()
        let propValue = this.readValue()

        obj[propName] = propValue
    }

    private readValue() {
        this.index++

        let char: string
        let escaped = false
        let result = ""

        while ((char = this.char()) !== undefined) {
            const isEscape = char === FileReader.Syntax.Escape
            if (isEscape && !escaped)
                escaped = true
            
            if (!escaped && char === "\n" && this.code[this.index + 1] === FileReader.Syntax.Open) {
                this.index
                break
            }

            if (!escaped)
                result += char

            escaped = false
            this.index++
        }

        return result.trim()
    }

    private readName() {
        this.index++

        let closed = false
        let char: string
        let escaped = false
        let result = ""

        while ((char = this.char()) !== undefined) {
            const isEscape = char === FileReader.Syntax.Escape
            if (isEscape && !escaped)
                escaped = true
            
            if (!escaped && char === FileReader.Syntax.Close) {
                closed = true
                break
            }

            if (escaped)
                result += this.code[this.index + 1]
            else 
                result += char

            escaped = false
            this.index++
        }

        if (!closed) 
            throw new ForgeError(null, ErrorType.CompilerError, "Property is missing closure brace")

        this.index++

        return result
    }

    private char() {
        return this.code[this.index]
    }
}
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileReader = void 0;
const fs_1 = require("fs");
const structures_1 = require("../structures");
class FileReader {
    code;
    req;
    static Syntax = {
        Open: "[",
        Close: "]",
        Escape: "\\",
    };
    index = 0;
    constructor(code, req) {
        this.code = code;
        this.req = req;
    }
    static read(fsPath, reqPath) {
        const str = (0, fs_1.readFileSync)(fsPath, "utf-8");
        const req = fsPath.endsWith(".js") ? require(reqPath) : null;
        return new this(str, req).read();
    }
    read() {
        if (this.req !== null) {
            if ("default" in this.req)
                return this.req.default;
            else if (Array.isArray(this.req))
                return this.req;
            else if (Object.keys(this.req).length !== 0)
                return this.req;
        }
        let char;
        const obj = {};
        while ((char = this.char()) !== undefined) {
            if (this.index === 0 && char === FileReader.Syntax.Open)
                this.parseProperty(obj);
            else
                this.index++;
            if (char === "\n")
                this.parseProperty(obj);
        }
        return obj;
    }
    parseProperty(obj) {
        if (this.char() === FileReader.Syntax.Escape || this.char() !== FileReader.Syntax.Open)
            return;
        let propName = this.readName();
        let propValue = this.readValue();
        obj[propName] = propValue;
    }
    readValue() {
        this.index++;
        let char;
        let escaped = false;
        let result = "";
        while ((char = this.char()) !== undefined) {
            const isEscape = char === FileReader.Syntax.Escape;
            if (isEscape && !escaped)
                escaped = true;
            if (!escaped && char === "\n" && this.code[this.index + 1] === FileReader.Syntax.Open) {
                this.index;
                break;
            }
            if (!escaped)
                result += char;
            escaped = false;
            this.index++;
        }
        return result.trim();
    }
    readName() {
        this.index++;
        let closed = false;
        let char;
        let escaped = false;
        let result = "";
        while ((char = this.char()) !== undefined) {
            const isEscape = char === FileReader.Syntax.Escape;
            if (isEscape && !escaped)
                escaped = true;
            if (!escaped && char === FileReader.Syntax.Close) {
                closed = true;
                break;
            }
            if (escaped)
                result += this.code[this.index + 1];
            else
                result += char;
            escaped = false;
            this.index++;
        }
        if (!closed)
            throw new structures_1.ForgeError(null, structures_1.ErrorType.CompilerError, "Property is missing closure brace", 0, 0);
        this.index++;
        return result;
    }
    char() {
        return this.code[this.index];
    }
}
exports.FileReader = FileReader;
//# sourceMappingURL=FileReader.js.map
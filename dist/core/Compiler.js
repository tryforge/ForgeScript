"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Compiler = exports.Conditions = exports.Operators = exports.OperatorType = void 0;
const CompiledFunction_1 = require("../structures/@internal/CompiledFunction");
const ForgeError_1 = require("../structures/forge/ForgeError");
const discord_js_1 = require("discord.js");
var OperatorType;
(function (OperatorType) {
    OperatorType["Eq"] = "==";
    OperatorType["NotEq"] = "!=";
    OperatorType["Lte"] = "<=";
    OperatorType["Gte"] = ">=";
    OperatorType["Gt"] = ">";
    OperatorType["Lt"] = "<";
    OperatorType["None"] = "unknown";
})(OperatorType || (exports.OperatorType = OperatorType = {}));
exports.Operators = new Set(Object.values(OperatorType));
exports.Conditions = {
    unknown: (lhs, rhs) => lhs === "true",
    "!=": (lhs, rhs) => lhs !== rhs,
    "==": (lhs, rhs) => lhs === rhs,
    "<": (lhs, rhs) => Number(lhs) < Number(rhs),
    "<=": (lhs, rhs) => Number(lhs) <= Number(rhs),
    ">": (lhs, rhs) => Number(lhs) > Number(rhs),
    ">=": (lhs, rhs) => Number(lhs) >= Number(rhs),
};
/**
 * REWRITE NEEDED
 */
class Compiler {
    path;
    code;
    static Syntax = {
        Open: "[",
        Close: "]",
        Escape: "\\",
        Negation: "!",
        Separator: ";"
    };
    static SystemRegex = /(\\+)?\[SYSTEM_FUNCTION\(\d+\)\]/gm;
    static Regex;
    static InvalidCharRegex = /(\$\{|`)/g;
    static Functions = new discord_js_1.Collection();
    static EscapeRegex = /(\.|\$|\(|\)|\*|\[|\]|\{|\}|\?|!|\^)/gim;
    id = 0;
    matches;
    index = 0;
    constructor(path, code) {
        this.path = path;
        this.code = code;
        if (code) {
            this.matches = Array.from(code.matchAll(Compiler.Regex)).map((x) => ({
                index: x.index,
                negated: !!x[1],
                length: x[0].length,
                fn: this.getFunction(x[2])
            }));
        }
        else
            this.matches = [];
    }
    getFunction(str) {
        const fn = `$${str.toLowerCase()}`;
        return Compiler.Functions.get(fn) ??
            Compiler.Functions.find(x => x.aliases?.some(x => x.toLowerCase() === fn)) ??
            this.error(`Function ${fn} is not registered.`);
    }
    compile() {
        if (!this.code || this.matches.length === 0)
            return {
                code: this.code ?? "",
                resolve: this.wrap(this.code ?? ""),
                functions: [],
            };
        let out = "";
        const functions = new Array();
        while (this.matches.length !== 0) {
            const match = this.matches.shift();
            let escaped = false;
            while (match.index !== this.index) {
                const char = this.next();
                const isEscape = char === Compiler.Syntax.Escape;
                if (!escaped && isEscape) {
                    escaped = true;
                    continue;
                }
                escaped = false;
                out += char;
            }
            if (escaped)
                continue;
            const fn = this.parseFunction(match);
            out += fn.id;
            functions.push(fn);
        }
        if (this.index !== this.code.length)
            out += this.code.slice(this.index);
        return {
            code: out,
            functions,
            resolve: this.wrap(out),
        };
    }
    parseFunction(match) {
        this.moveTo(match.index + match.length);
        const char = this.char();
        const usesFields = char === Compiler.Syntax.Open;
        const name = match.fn.name;
        const id = this.getNextId();
        if (match.fn.args === null || (!usesFields && !match.fn.args.required)) {
            // Increment index if escape character, just to skip it.
            if (char === Compiler.Syntax.Escape)
                this.index++;
            return {
                id,
                name,
                negated: match.negated,
                fields: null,
            };
        }
        if (match.fn.args.required && !usesFields) {
            this.error(`Function ${match.fn.name} requires brackets`);
        }
        const fields = new Array();
        // Skip brace open
        this.index++;
        for (let i = 0, len = match.fn.args.fields.length; i < len; i++) {
            const isLast = i + 1 === match.fn.args.fields.length;
            const arg = match.fn.args.fields[i];
            if (arg.rest === true) {
                for (;;) {
                    fields.push(this.parseField(match, arg));
                    if (this.char() === Compiler.Syntax.Separator)
                        this.index++;
                    else if (this.char() === Compiler.Syntax.Close)
                        break;
                }
            }
            else {
                fields.push(this.parseField(match, arg, isLast));
                if (this.char() === Compiler.Syntax.Separator) {
                    this.index++;
                    if (!isLast)
                        continue;
                }
            }
            const old = this.char();
            if (isLast) {
                if (old !== Compiler.Syntax.Close) {
                    this.error(`Function ${match.fn.name} expects ${match.fn.args.fields.length} arguments at most`);
                }
            }
            else if (old === Compiler.Syntax.Close)
                break;
        }
        // Skip closure
        this.index++;
        return {
            id,
            name,
            negated: match.negated,
            fields,
        };
    }
    parseField(match, arg, requireEndBrace = false) {
        let nextMatch = this.matches[0];
        const condition = {};
        let value = "";
        const functions = new Array();
        let braceClosure = false;
        let escaped = false;
        for (;;) {
            const char = this.char();
            if (char === undefined)
                this.error("Reached end of code and found no brace closure for " + match.fn.name);
            const isEscape = char === Compiler.Syntax.Escape;
            const isClosure = char === Compiler.Syntax.Close;
            const isSeparator = char === Compiler.Syntax.Separator;
            // Mark as escaped
            if (!escaped && isEscape)
                escaped = true;
            if (!escaped) {
                if (isClosure || isSeparator) {
                    if (isClosure)
                        braceClosure = true;
                    break;
                }
                else if (arg.condition === true && condition.op === undefined) {
                    const possibleOp = [char + this.peek(), char].find((x) => exports.Operators.has(x));
                    if (possibleOp !== undefined) {
                        this.index += possibleOp.length;
                        condition.op = possibleOp;
                        condition.lhs = {
                            functions: Array.from(functions),
                            value,
                            resolve: this.wrap(value),
                        };
                        functions.length = 0;
                        value = "";
                        continue;
                    }
                }
            }
            if (nextMatch?.index === this.index) {
                // Remove the function that we are about to parse
                this.matches.shift();
                if (!escaped) {
                    const fn = this.parseFunction(nextMatch);
                    functions.push(fn);
                    value += fn.id;
                }
                // Next function to match
                nextMatch = this.matches[0];
                if (!escaped)
                    continue;
            }
            if (!isEscape)
                escaped = false;
            this.index++;
            if (!escaped)
                value += char;
        }
        const data = {
            functions,
            value,
            resolve: this.wrap(value),
        };
        if (arg.condition === true) {
            condition.op ??= OperatorType.None;
            condition.resolve = this.wrapCondition(condition.op);
            if (!condition.lhs)
                condition.lhs = data;
            else if (!condition.rhs)
                condition.rhs = data;
            return condition;
        }
        return data;
    }
    error(str) {
        const { line, column } = this.locate(this.index);
        throw new ForgeError_1.ForgeError(null, ForgeError_1.ErrorType.CompilerError, str, line, column, this.path ?? "index file");
    }
    locate(index) {
        const data = {
            column: 0,
            line: 1
        };
        for (let i = 0; i < index; i++) {
            const char = this.code[i];
            if (char === "\n")
                data.line++, data.column = 0;
            else
                data.column++;
        }
        return data;
    }
    back() {
        return this.code[this.index - 1];
    }
    wrapCondition(op) {
        return exports.Conditions[op];
    }
    wrap(code) {
        let i = 0;
        const gencode = code.replace(Compiler.InvalidCharRegex, "\\$1").replace(Compiler.SystemRegex, () => {
            return "${args[" + i++ + "] ?? ''}";
        });
        return new Function("args", "return `" + gencode + "`");
    }
    moveTo(index) {
        let out = "";
        if (this.index >= index)
            return out;
        while (this.index !== index)
            out += this.next();
        return out;
    }
    getNextId() {
        return `[SYSTEM_FUNCTION(${++this.id})]`;
    }
    char() {
        return this.code[this.index];
    }
    peek() {
        return this.code[this.index + 1];
    }
    next() {
        return this.code[this.index++];
    }
    static setFunctions(fns) {
        fns.map((x) => {
            this.Functions.set(x.name.toLowerCase(), x);
            x.aliases?.filter(x => typeof x === "string")?.map(alias => this.Functions.set(alias.toLowerCase(), x));
        });
        const mapped = new Array();
        for (const [, fn] of this.Functions) {
            mapped.push(fn.name);
            if (fn.aliases?.length)
                mapped.push(...fn.aliases);
        }
        this.Regex = new RegExp(`\\$(\\!)?(${mapped
            .map(x => (x.startsWith("$") ? x.slice(1).toLowerCase() : x.toLowerCase()).replace(Compiler.EscapeRegex, "\\$1"))
            .sort((x, y) => y.length - x.length)
            .join("|")})`, "gim");
    }
    static compile(code, path) {
        const result = new this(path, code).compile();
        return {
            ...result,
            functions: result.functions.map((x) => new CompiledFunction_1.CompiledFunction(x)),
        };
    }
    static setSyntax(syntax) {
        Reflect.set(Compiler, "Syntax", syntax);
    }
}
exports.Compiler = Compiler;
//# sourceMappingURL=Compiler.js.map
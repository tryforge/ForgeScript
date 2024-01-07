"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperimentalCompiler = exports.Conditions = exports.Operators = exports.OperatorType = void 0;
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
class ExperimentalCompiler {
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
    static InvalidCharRegex = /(\\|\${|`)/g;
    static Functions = new discord_js_1.Collection();
    id = 0;
    matches;
    matchIndex = 0;
    index = 0;
    outputFunctions = new Array();
    outputCode = "";
    constructor(path, code) {
        this.path = path;
        this.code = code;
        if (code) {
            this.matches = Array.from(code.matchAll(ExperimentalCompiler.Regex)).map((x) => ({
                index: x.index,
                negated: !!x[1],
                length: x[0].length,
                fn: this.getFunction(x[2])
            }));
        }
        else
            this.matches = [];
    }
    compile() {
        if (this.matches.length !== 0) {
            // Loop while functions are unmatched
            let match;
            while ((match = this.match) !== undefined) {
                const isEscaped = this.code[match.index - 1] === ExperimentalCompiler.Syntax.Escape;
                if (isEscaped) {
                    this.outputCode += this.code.slice(this.index, (this.index = match.index) - 1);
                    this.matchIndex++;
                    continue;
                }
                else {
                    this.outputCode += this.code.slice(this.index, this.index = match.index);
                    const fn = this.parseFunction();
                    this.outputCode += fn.id;
                    this.outputFunctions.push(fn);
                }
            }
            this.outputCode += this.code.slice(this.index);
        }
        else
            this.outputCode = this.code ?? "";
        return {
            code: this.outputCode,
            functions: this.outputFunctions,
            resolve: this.wrap(this.outputCode)
        };
    }
    parseFunction() {
        // Skip this match already
        const match = this.matches[this.matchIndex++];
        // Skip function
        this.skip(match.length);
        const hasFields = this.code[this.index] === ExperimentalCompiler.Syntax.Open;
        if (!hasFields && match.fn.args?.required) {
            this.error(`Function ${match.fn.name} requires brackets`);
        }
        else if (!hasFields) {
            return this.prepareFunction(match, null);
        }
        // Skip [
        this.skip(1);
        const fields = new Array();
        // Field parsing 
        for (let i = 0, len = match.fn.args.fields.length; i < len; i++) {
            let isLast = i + 1 === len;
            const field = match.fn.args.fields[i];
            if (!field.rest) {
                fields.push(this.parseAnyField(match, field));
            }
            else {
                for (;;) {
                    fields.push(this.parseAnyField(match, field));
                    if (!this.skipIf(ExperimentalCompiler.Syntax.Separator))
                        break;
                }
            }
            const isSeparator = this.char() === ExperimentalCompiler.Syntax.Separator;
            if (!isSeparator)
                break;
            else if (isLast && isSeparator) {
                this.error(`Function ${match.fn.name} expects ${match.fn.args?.fields.length} arguments at most`);
            }
        }
        // Skip ]
        this.skip(1);
        return this.prepareFunction(match, fields);
    }
    parseConditionField(ref) {
        const data = {};
        const functions = new Array();
        let fieldValue = "";
        let closedGracefully = false;
        const match = this.match;
        let char;
        while ((char = this.char()) !== undefined) {
            const isSeparator = char === ExperimentalCompiler.Syntax.Separator;
            const isClosure = char === ExperimentalCompiler.Syntax.Close;
            const isEscape = char === ExperimentalCompiler.Syntax.Escape;
            if (isEscape) {
                this.index++;
                fieldValue += this.char();
                if (match?.index === this.index)
                    this.matchIndex++;
                this.index++;
                continue;
            }
            if (isClosure || isSeparator) {
                closedGracefully = true;
                break;
            }
            if (match?.index === this.index) {
                const fn = this.parseFunction();
                functions.push(fn);
                fieldValue += fn.id;
                continue;
            }
            if (data.op === undefined) {
                const possibleOperator = [char + this.peek(), char].find((x) => exports.Operators.has(x));
                if (possibleOperator) {
                    data.op = possibleOperator;
                    data.lhs = {
                        functions: [...functions],
                        resolve: this.wrap(fieldValue),
                        value: fieldValue
                    };
                    fieldValue = "";
                    functions.length = 0;
                    this.index += data.op.length;
                    continue;
                }
            }
            fieldValue += char;
            this.index++;
        }
        if (!closedGracefully)
            this.error(`Function ${ref.fn.name} is missing brace closure`);
        const out = {
            functions,
            value: fieldValue,
            resolve: this.wrap(fieldValue)
        };
        if (data.op)
            data.rhs = out;
        else
            data.lhs = out;
        data.op ??= OperatorType.None;
        return data;
    }
    parseNormalField(ref) {
        const functions = new Array();
        let fieldValue = "";
        let closedGracefully = false;
        const match = this.match;
        let char;
        while ((char = this.char()) !== undefined) {
            const isSeparator = char === ExperimentalCompiler.Syntax.Separator;
            const isClosure = char === ExperimentalCompiler.Syntax.Close;
            const isEscape = char === ExperimentalCompiler.Syntax.Escape;
            if (isEscape) {
                this.index++;
                fieldValue += this.char();
                if (match?.index === this.index)
                    this.matchIndex++;
                this.index++;
                continue;
            }
            if (isClosure || isSeparator) {
                closedGracefully = true;
                break;
            }
            if (match?.index === this.index) {
                const fn = this.parseFunction();
                functions.push(fn);
                fieldValue += fn.id;
                continue;
            }
            fieldValue += char;
            this.index++;
        }
        if (!closedGracefully)
            this.error(`Function ${ref.fn.name} is missing brace closure`);
        return {
            resolve: this.wrap(fieldValue),
            functions,
            value: fieldValue
        };
    }
    parseAnyField(ref, field) {
        if (field.condition) {
            return this.parseConditionField(ref);
        }
        else {
            return this.parseNormalField(ref);
        }
    }
    prepareFunction(match, fields) {
        return {
            id: this.getNextId(),
            fields,
            name: match.fn.name,
            negated: match.negated
        };
    }
    skip(n) {
        return this.moveTo(n + this.index);
    }
    skipIf(char) {
        if (char === this.code[this.index])
            return this.skip(1), true;
        return false;
    }
    get match() {
        return this.matches[this.matchIndex];
    }
    getFunction(str) {
        const fn = str.toLowerCase();
        return ExperimentalCompiler.Functions.get(`$${fn}`) ??
            ExperimentalCompiler.Functions.find(x => x.aliases?.some(x => typeof x === "string" ? x === `$${fn}` : x.test(fn)) ?? false) ??
            this.error(`Function ${fn} is not registered.`);
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
        const gencode = code.replace(ExperimentalCompiler.InvalidCharRegex, "\\$1").replace(ExperimentalCompiler.SystemRegex, () => {
            return "${args[" + i++ + "] ?? ''}";
        });
        console.log(gencode);
        return new Function("args", "return `" + gencode + "`");
    }
    moveTo(index) {
        this.index = index;
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
                mapped.push(...fn.aliases.map(x => typeof x === "string" ? x : x.source));
        }
        this.Regex = new RegExp(`\\$(\\!)?(${mapped
            .map(x => x.startsWith("$") ? x.slice(1).toLowerCase() : x)
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
        Reflect.set(ExperimentalCompiler, "Syntax", syntax);
    }
}
exports.ExperimentalCompiler = ExperimentalCompiler;
//# sourceMappingURL=ExperimentalCompiler.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForgeError = exports.ErrorType = void 0;
var ErrorType;
(function (ErrorType) {
    ErrorType["InvalidArgType"] = "Given value $1 for argument $2 is not of type $3";
    ErrorType["MissingArg"] = "Function $1 is missing argument $2";
    ErrorType["MissingFields"] = "Function $1 requires brackets";
    ErrorType["UnknownXName"] = "Unknown $1 with name $2";
    ErrorType["Custom"] = "$1";
    ErrorType["CompilerError"] = "$1 at $2:$3";
})(ErrorType || (exports.ErrorType = ErrorType = {}));
class ForgeError extends Error {
    static Regex = /\$(\d+)/g;
    constructor(fn, type, ...args) {
        super(ForgeError.make(fn, type, ...args));
    }
    static make(fn, type, ...args) {
        const res = type.replace(this.Regex, (match) => `**\`${`${args[Number(match.slice(1)) - 1]}`.replaceAll("\\", "\\\\").replaceAll("`", "\\`")}\`**`);
        return `> ${res}${fn ? ` at \`${fn.display}\`` : ""}`;
    }
}
exports.ForgeError = ForgeError;
//# sourceMappingURL=ForgeError.js.map
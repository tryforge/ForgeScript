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
    ErrorType["MissingApplicationCommandData"] = "An application command is missing data property ($1)";
    ErrorType["ExtensionNotFound"] = "Extension $1 does not seem to be loaded but is being used.";
    ErrorType["MissingCommandType"] = "A command is missing its type ($1)";
    ErrorType["UnsupportedExtensionVersion"] = "Extension $1 does not work for your ForgeScript version: $2";
    ErrorType["RequiredExtension"] = "Extension $1 requires the next extension: $2 loaded to work";
    ErrorType["CompilerError"] = "$1 at $2:$3 ($4)";
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
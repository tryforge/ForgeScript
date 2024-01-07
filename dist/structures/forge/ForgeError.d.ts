import { CompiledFunction } from "../@internal/CompiledFunction";
export type GetErrorArgs<T extends string> = T extends `${infer L}$${infer R}` ? [unknown, ...GetErrorArgs<R>] : [];
export declare enum ErrorType {
    InvalidArgType = "Given value $1 for argument $2 is not of type $3",
    MissingArg = "Function $1 is missing argument $2",
    MissingFields = "Function $1 requires brackets",
    UnknownXName = "Unknown $1 with name $2",
    Custom = "$1",
    MissingApplicationCommandData = "An application command is missing data property ($1)",
    ExtensionNotFound = "Extension $1 does not seem to be loaded but is being used.",
    MissingCommandType = "A command is missing its type ($1)",
    UnsupportedExtensionVersion = "Extension $1 does not work for your ForgeScript version: $2",
    RequiredExtension = "Extension $1 requires the next extension: $2 loaded to work",
    CompilerError = "$1 at $2:$3 ($4)"
}
export declare class ForgeError<T extends ErrorType = ErrorType> extends Error {
    static readonly Regex: RegExp;
    constructor(fn: CompiledFunction | null, type: T, ...args: GetErrorArgs<T>);
    static make(fn: CompiledFunction | null, type: ErrorType, ...args: unknown[]): string;
}
//# sourceMappingURL=ForgeError.d.ts.map
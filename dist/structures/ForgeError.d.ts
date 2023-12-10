import { CompiledFunction } from "./CompiledFunction";
export type GetErrorArgs<T extends string> = T extends `${infer L}$${infer R}` ? [unknown, ...GetErrorArgs<R>] : [];
export declare enum ErrorType {
    InvalidArgType = "Given value $1 for argument $2 is not of type $3",
    MissingArg = "Function $1 is missing argument $2",
    MissingFields = "Function $1 requires brackets",
    UnknownXName = "Unknown $1 with name $2",
    Custom = "$1",
    CompilerError = "$1 at $2:$3"
}
export declare class ForgeError<T extends ErrorType = ErrorType> extends Error {
    static readonly Regex: RegExp;
    constructor(fn: CompiledFunction | null, type: T, ...args: GetErrorArgs<T>);
    static make(fn: CompiledFunction | null, type: ErrorType, ...args: unknown[]): string;
}
//# sourceMappingURL=ForgeError.d.ts.map
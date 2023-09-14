import { ForgeError } from "./ForgeError";
export declare enum ReturnType {
    Error = 0,
    Stop = 1,
    Success = 2,
    Return = 3,
    Break = 4,
    Continue = 5
}
export type ReturnValue<T extends ReturnType> = T extends ReturnType.Error ? ForgeError : T extends ReturnType.Return ? string : T extends ReturnType.Success ? unknown : T extends ReturnType.Stop | ReturnType.Break | ReturnType.Continue ? null : never;
export declare class Return<T extends ReturnType = ReturnType> {
    readonly type: T;
    readonly value: ReturnValue<T>;
    constructor(type: T, value: ReturnValue<T>);
    static return(value: ReturnValue<ReturnType.Return>): Return<ReturnType.Return>;
    static error(value: ReturnValue<ReturnType.Error>): Return<ReturnType.Error>;
    static stop(): Return<ReturnType.Stop>;
    static break(): Return<ReturnType.Break>;
    static continue(): Return<ReturnType.Continue>;
    static successJSON(value: Return<ReturnType.Success>): Return<ReturnType.Success>;
    static successFormatted(value: Return<ReturnType.Success>): Return<ReturnType.Success>;
    static success(value?: ReturnValue<ReturnType.Success>): Return<ReturnType.Success>;
    get error(): boolean;
    get stop(): boolean;
    get return(): boolean;
    get success(): boolean;
    get continue(): boolean;
    get break(): boolean;
}
//# sourceMappingURL=Return.d.ts.map
import { INativeFunction, NativeFunction } from "../structures/@internal/NativeFunction";
import { IRawFunction } from "../core";
export type RecursiveArray<T> = T | T[];
export type AnyNativeFunction = NativeFunction<any, any, any>;
export declare class FunctionManager {
    private static readonly Functions;
    static loadNative(): void;
    static load(provider: string, path: string): void;
    static load(path: string): void;
    static addMany(...fns: RecursiveArray<AnyNativeFunction>[]): void;
    static add(fn: AnyNativeFunction): void;
    static reload(): void;
    static get(name: string): AnyNativeFunction;
    static toJSON(): INativeFunction<any, any, any>[];
    static get raw(): IRawFunction[];
}
//# sourceMappingURL=FunctionManager.d.ts.map
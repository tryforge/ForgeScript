import { ArgType, IArg, INativeFunction, NativeFunction } from "../structures/@internal/NativeFunction";
import { IRawFunction } from "../core/Compiler";
export declare class FunctionManager {
    private static readonly Functions;
    static loadNative(): void;
    static load(provider: string, path: string): void;
    static add(fn: NativeFunction<IArg[]>): void;
    static disable(fns: string[]): void;
    static get(name: string): NativeFunction<IArg<ArgType, boolean, boolean, import("../structures/@internal/NativeFunction").EnumLike<any>>[], boolean>;
    static toJSON(): INativeFunction<any>[];
    static get raw(): IRawFunction[];
}
//# sourceMappingURL=FunctionManager.d.ts.map
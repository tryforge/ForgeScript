import { ArgType, INativeFunction, NativeFunction } from "../structures/@internal/NativeFunction";
import { IRawFunction } from "../core/Compiler";
export declare class FunctionManager {
    private static readonly Functions;
    static loadNative(): void;
    static load(path: string): Promise<void>;
    static disable(fns: string[]): void;
    static get(name: string): NativeFunction<import("../structures/@internal/NativeFunction").IArg<ArgType, boolean, boolean, import("../structures/@internal/NativeFunction").EnumLike<any>>[], boolean>;
    static toJSON(): INativeFunction<any>[];
    static get raw(): IRawFunction[];
}
//# sourceMappingURL=FunctionManager.d.ts.map
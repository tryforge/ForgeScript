import { ArgType, INativeFunction, NativeFunction } from "../structures/NativeFunction";
import { IRawFunction } from "../core/Compiler";
export declare class FunctionManager {
    private static readonly Functions;
    static loadNative(): void;
    static load(path: string): Promise<void>;
    static get(name: string): NativeFunction<import("../structures/NativeFunction").IArg<ArgType, boolean, boolean, import("../structures/NativeFunction").EnumLike<any>>[], boolean>;
    static toJSON(): INativeFunction<any>[];
    static get raw(): IRawFunction[];
}
//# sourceMappingURL=FunctionManager.d.ts.map
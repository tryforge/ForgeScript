import { IExtendedCompilationResult } from "../core/Compiler";
import { Context } from "./Context";
import { Return, ReturnType } from "./Return";
export interface IForgeFunction {
    name: string;
    params?: string[];
    code: string;
}
export declare class ForgeFunction {
    readonly data: IForgeFunction;
    readonly compiled: IExtendedCompilationResult;
    constructor(data: IForgeFunction);
    call(ctx: Context, args: string[]): Promise<Return<ReturnType>>;
}
//# sourceMappingURL=ForgeFunction.d.ts.map
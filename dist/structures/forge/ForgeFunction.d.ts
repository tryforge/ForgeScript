import { Context } from "..";
import { IExtendedCompilationResult } from "../../core";
import { Return, ReturnType } from "../@internal/Return";
export interface IForgeFunction {
    name: string;
    params?: string[];
    code: string;
    path?: string;
}
export declare class ForgeFunction {
    readonly data: IForgeFunction;
    readonly compiled: IExtendedCompilationResult;
    constructor(data: IForgeFunction);
    call(ctx: Context, args: string[]): Promise<Return<ReturnType>>;
}
//# sourceMappingURL=ForgeFunction.d.ts.map
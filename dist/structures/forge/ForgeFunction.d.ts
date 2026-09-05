import { ArgType, CompiledFunction, Context, IArg, NativeFunction } from "..";
import { IExtendedCompilationResult } from "../../core";
import { Return, ReturnType } from "../@internal/Return";
export interface IForgeFunctionParam {
    name: string;
    type?: ArgType | keyof typeof ArgType;
    required?: boolean;
    rest?: boolean;
    [x: PropertyKey]: unknown;
}
export interface IForgeFunction {
    name: string;
    params?: Array<string | IForgeFunctionParam>;
    firstParamCondition?: boolean;
    [x: PropertyKey]: unknown;
    brackets?: boolean;
    code: string;
    path?: string;
}
export declare class ForgeFunction {
    readonly data: IForgeFunction;
    compiled?: IExtendedCompilationResult;
    constructor(data: IForgeFunction);
    populate(): void;
    asNative(): NativeFunction<IArg<ArgType.String, boolean, boolean, import("..").EnumLike<any>>[], any>;
    call(ctx: Context, fn: CompiledFunction, args: string[]): Promise<Return<ReturnType.Success> | Return<ReturnType.Error> | Return<ReturnType.Stop>>;
}
//# sourceMappingURL=ForgeFunction.d.ts.map
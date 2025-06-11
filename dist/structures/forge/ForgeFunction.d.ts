import { ArgType, Context, IArg, NativeFunction } from "..";
import { IExtendedCompilationResult } from "../../core";
import { Return, ReturnType } from "../@internal/Return";
export interface IForgeFunctionParam {
    name: string;
    type?: ArgType | keyof typeof ArgType;
    required?: boolean;
    rest?: boolean;
}
export interface IForgeFunction {
    name: string;
    params?: Array<string | IForgeFunctionParam>;
    firstParamCondition?: boolean;
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
    call(ctx: Context, args: string[]): Promise<Return<ReturnType.Error> | Return<ReturnType.Stop | ReturnType.Success>>;
}
//# sourceMappingURL=ForgeFunction.d.ts.map
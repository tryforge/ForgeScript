import { ICompiledFunctionConditionField, ICompiledFunctionField, ICompiledFunction } from "../../core";
import { ErrorType, GetErrorArgs } from "../forge/ForgeError";
import { Context } from "./Context";
import { IArg, UnwrapArgs, NativeFunction, ArgType } from "./NativeFunction";
import { Return, ReturnType, ReturnValue } from "./Return";
export interface IExtendedCompiledFunctionConditionField extends Omit<ICompiledFunctionConditionField, "rhs" | "lhs"> {
    lhs: IExtendedCompiledFunctionField;
    rhs?: IExtendedCompiledFunctionField;
}
export interface IExtendedCompiledFunctionField extends Omit<ICompiledFunctionField, "functions"> {
    functions: CompiledFunction[];
    resolveArg?: (ctx: Context, arg: IArg, value: string, ref: Array<unknown>) => unknown | Promise<unknown>;
}
export interface IExtendedCompiledFunction extends Omit<ICompiledFunction, "fields"> {
    fields: (IExtendedCompiledFunctionField | IExtendedCompiledFunctionConditionField)[] | null;
}
export interface IMultipleArgResolve<T extends [...IArg[]], X extends [...number[]]> {
    args: {
        [P in keyof X]: UnwrapArgs<T>[X[P]];
    };
    return: Return;
}
export declare class CompiledFunction<T extends [...IArg[]] = IArg[], Unwrap extends boolean = boolean> {
    static readonly OverwriteSymbolMapping: {
        "/": null;
        "+": boolean;
        "-": boolean;
    };
    static readonly IdRegex: RegExp;
    static readonly URLRegex: RegExp;
    static readonly CDNIdRegex: RegExp;
    readonly data: IExtendedCompiledFunction;
    readonly fn: NativeFunction<T, Unwrap>;
    constructor(raw: ICompiledFunction);
    displayField(i: number): string;
    get display(): string;
    /**
     * Resolves fields of a function.
     * @param ctx
     * @returns
     */
    private resolveArgs;
    private resolveMultipleArgs;
    /**
     * Does not account for condition fields.
     * @param ctx
     * @param index
     * @returns
     */
    private resolveUnhandledArg;
    private resolveCondition;
    private resolveCode;
    private argTypeRejection;
    private resolveNumber;
    private resolveBigInt;
    private resolveColor;
    private resolvePermission;
    private resolveString;
    private get resolveUnknown();
    private resolveTime;
    private resolveEnum;
    private resolveBoolean;
    private resolveMessage;
    private resolveChannel;
    private resolveTextChannel;
    private resolveGuild;
    private resolveJson;
    private resolveUser;
    private resolveRoleOrUser;
    private resolveGuildEmoji;
    private resolveForumTag;
    private resolveSticker;
    private resolveAttachment;
    private resolveMember;
    private resolveReaction;
    private resolveURL;
    private resolveInvite;
    private resolveWebhook;
    private resolveOverwritePermission;
    private resolveRole;
    private resolveDate;
    private resolvePointer;
    private resolveArg;
    get hasFields(): boolean;
    error(err: Error): Return<ReturnType.Error>;
    error<T extends ErrorType>(type: T, ...args: GetErrorArgs<T>): Return<ReturnType.Error>;
    customError(msg: string): Return<ReturnType.Error>;
    execute(ctx: Context): Promise<Return>;
    private isValidReturnType;
    private fail;
    static toResolveArgString(type: ArgType): "resolveGuild" | "resolveChannel" | "resolveUser" | "resolveRole" | "resolveInvite" | "resolveWebhook" | "resolveMessage" | "resolveSticker" | "resolveUnknown" | "resolveURL" | "resolveString" | "resolveBigInt" | "resolveTextChannel" | "resolveOverwritePermission" | "resolveNumber" | "resolveDate" | "resolveRoleOrUser" | "resolvePermission" | "resolveJson" | "resolveColor" | "resolveEnum" | "resolveForumTag" | "resolveGuildEmoji" | "resolveBoolean" | "resolveAttachment" | "resolveReaction" | "resolveTime" | "resolveMember";
    getFunction(fieldIndex: number, ref: NativeFunction): CompiledFunction<IArg<ArgType, boolean, boolean, import("./NativeFunction").EnumLike<any>>[], boolean> | undefined;
    getFunctions(fieldIndex: number, ref: NativeFunction): CompiledFunction<IArg<ArgType, boolean, boolean, import("./NativeFunction").EnumLike<any>>[], boolean>[];
    return(value: ReturnValue<ReturnType.Return>): Return<ReturnType.Return>;
    stop(): Return<ReturnType.Stop>;
    break(): Return<ReturnType.Break>;
    continue(): Return<ReturnType.Continue>;
    successJSON(value: ReturnValue<ReturnType.Success>): Return<ReturnType.Success>;
    successFormatted(value: ReturnValue<ReturnType.Success>): Return<ReturnType.Success>;
    unsafeSuccess(value?: ReturnValue<ReturnType.Success>): Return<ReturnType.Success>;
    success(value?: ReturnValue<ReturnType.Success>): Return<ReturnType.Success>;
}
//# sourceMappingURL=CompiledFunction.d.ts.map
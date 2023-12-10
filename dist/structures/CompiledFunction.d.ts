import { ICompiledFunction, ICompiledFunctionConditionField, ICompiledFunctionField } from "../core/Compiler";
import { Context } from "./Context";
import { ErrorType, ForgeError, GetErrorArgs } from "./ForgeError";
import { ArgType, IArg, NativeFunction, UnwrapArgs } from "./NativeFunction";
import { Return } from "./Return";
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
    private readonly raw;
    static readonly IdRegex: RegExp;
    readonly data: IExtendedCompiledFunction;
    readonly fn: NativeFunction<T, Unwrap>;
    constructor(raw: ICompiledFunction);
    get negated(): boolean;
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
    private resolveTime;
    private resolveEnum;
    private resolveBoolean;
    private resolveMessage;
    private resolveChannel;
    private resolveGuild;
    private resolveJson;
    private resolveUser;
    private resolveGuildEmoji;
    private resolveForumTag;
    private resolveGuildSticker;
    private resolveMember;
    private resolveReaction;
    private resolveInvite;
    private resolveWebhook;
    private resolveRole;
    private resolveDate;
    private resolveArg;
    get hasFields(): boolean;
    error<T extends ErrorType>(type: T, ...args: GetErrorArgs<T>): ForgeError<T>;
    execute(ctx: Context): Promise<Return>;
    private isValidReturnType;
    private fail;
    static toResolveArgString(type: ArgType): "resolveGuild" | "resolveChannel" | "resolveUser" | "resolveRole" | "resolveInvite" | "resolveWebhook" | "resolveMessage" | "resolveString" | "resolveBigInt" | "resolveNumber" | "resolveDate" | "resolvePermission" | "resolveJson" | "resolveColor" | "resolveEnum" | "resolveForumTag" | "resolveGuildEmoji" | "resolveBoolean" | "resolveReaction" | "resolveGuildSticker" | "resolveTime" | "resolveMember";
}
//# sourceMappingURL=CompiledFunction.d.ts.map
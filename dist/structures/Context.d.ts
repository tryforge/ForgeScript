import { AnySelectMenuInteraction, ChatInputCommandInteraction, ContextMenuCommandInteraction } from "discord.js";
import { CompiledFunction } from "./CompiledFunction";
import { Container } from "./Container";
import { IArg, UnwrapArgs } from "./NativeFunction";
import { Return } from "./Return";
import { IRunnable } from "../core/Interpreter";
export type ExpectCallback<T extends [...IArg[]], Unwrap extends boolean> = (args: UnwrapArgs<T>) => Promise<Return> | Return;
export interface IHttpOptions {
    body: string;
    headers: Record<string, string>;
    method: string;
}
export declare class Context {
    #private;
    readonly runtime: IRunnable;
    executionTimestamp: number;
    http: Partial<IHttpOptions>;
    readonly container: Container;
    constructor(runtime: IRunnable);
    get client(): import("..").ForgeClient;
    get obj(): any;
    get args(): string[];
    get states(): import("../core/Interpreter").States | undefined;
    get member(): any;
    get emoji(): any;
    get role(): any;
    get reaction(): any;
    get message(): any;
    get interaction(): any;
    get user(): any;
    get guild(): any;
    get channel(): any;
    handle<Args extends [...IArg[]], Unwrap extends boolean>(fn: CompiledFunction<Args, Unwrap>, cb: ExpectCallback<Args, Unwrap>): Promise<Return>;
    alert(content: string): Promise<unknown>;
    handleNotSuccess(rt: Return): boolean;
    clearHttpOptions(): void;
    setEnvironmentKey(name: string, value: unknown): unknown;
    deleteEnvironmentKey(name: string): boolean;
    getEnvironmentKey(args: string[]): any;
    getKeyword(name: string): string;
    deleteKeyword(name: string): boolean;
    setKeyword(name: string, value: string): string;
    hasKeyword(name: string): boolean;
    clearKeywords(): void;
    clearEnvironment(): void;
    isSelectMenu(): this is this & {
        get interaction(): AnySelectMenuInteraction;
    };
    isContextCommand(): this is this & {
        get interaction(): ContextMenuCommandInteraction;
    };
    isCommand(): this is this & {
        get interaction(): ChatInputCommandInteraction;
    };
}
//# sourceMappingURL=Context.d.ts.map
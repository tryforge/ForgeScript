import { AnySelectMenuInteraction, ChatInputCommandInteraction, ContextMenuCommandInteraction } from "discord.js";
import { CompiledFunction } from "./CompiledFunction";
import { Container } from "./Container";
import { IArg, UnwrapArgs } from "./NativeFunction";
import { Return } from "./Return";
import { IRunnable } from "../../core/Interpreter";
export type ExpectCallback<T extends [...IArg[]], Unwrap extends boolean> = (args: UnwrapArgs<T>) => Promise<Return> | Return;
export declare enum HTTPContentType {
    Json = 0,
    Text = 1
}
export interface IHttpOptions {
    body: string;
    contentType?: HTTPContentType;
    headers: Record<string, string>;
    method: string;
}
export type ClassType = new (...args: any[]) => any;
export type ClassInstance<T> = T extends new (...args: any[]) => infer T ? T : never;
export declare class Context {
    #private;
    readonly runtime: IRunnable;
    [props: PropertyKey]: unknown;
    executionTimestamp: number;
    http: Partial<IHttpOptions>;
    readonly container: Container;
    constructor(runtime: IRunnable);
    get client(): import("../..").ForgeClient;
    get obj(): any;
    get args(): string[];
    get states(): import("../../core/Interpreter").States | undefined;
    get automod(): any;
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
    traverseDeleteEnvironmentKey(...keys: string[]): boolean;
    traverseAddEnvironmentKey(value: unknown, ...keys: string[]): boolean;
    deleteEnvironmentKey(name: string): boolean;
    getEnvironmentKey(...args: string[]): any;
    getKeyword(name: string): unknown;
    deleteKeyword(name: string): boolean;
    setKeyword(name: string, value: unknown): unknown;
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
    getEnvironmentInstance<T extends ClassType>(type: T, ...keys: string[]): ClassInstance<T> | null;
    get<T>(key: PropertyKey): T;
    private error;
    get getExtension(): <T extends ClassType, B extends boolean>(type: T, required?: B | undefined) => B extends true ? ClassInstance<T> : ClassInstance<T> | null;
}
//# sourceMappingURL=Context.d.ts.map
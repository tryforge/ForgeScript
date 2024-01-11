import { AnySelectMenuInteraction, AutoModerationActionExecution, BaseChannel, ChatInputCommandInteraction, ContextMenuCommandInteraction, Guild, GuildEmoji, GuildMember, Interaction, Message, MessageReaction, Role, Sticker, User } from "discord.js";
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
export type FilterProperties<T> = {
    [P in keyof T as T[P] extends (...args: any[]) => any ? never : P]: T[P];
};
export declare class Context {
    #private;
    readonly runtime: IRunnable;
    [props: PropertyKey]: unknown;
    executionTimestamp: number;
    http: Partial<IHttpOptions>;
    readonly container: Container;
    constructor(runtime: IRunnable);
    get client(): import("../..").ForgeClient;
    get obj(): import("./Container").Sendable;
    get args(): string[];
    get states(): import("../../core/Interpreter").States | undefined;
    get automod(): AutoModerationActionExecution | null;
    get member(): GuildMember | null;
    get emoji(): GuildEmoji | null;
    get sticker(): Sticker | null;
    get role(): Role | null;
    get reaction(): MessageReaction | null;
    get message(): Message<any> | null;
    get interaction(): Interaction | null;
    get user(): User | null;
    get guild(): Guild | null;
    get channel(): BaseChannel | import("discord.js").CategoryChannel | import("discord.js").NewsChannel | import("discord.js").StageChannel | import("discord.js").TextChannel | import("discord.js").PrivateThreadChannel | import("discord.js").PublicThreadChannel<boolean> | import("discord.js").VoiceChannel | import("discord.js").ForumChannel | import("discord.js").MediaChannel | null;
    handle<Args extends [...IArg[]], Unwrap extends boolean>(fn: CompiledFunction<Args, Unwrap>, cb: ExpectCallback<Args, Unwrap>): Promise<Return>;
    alert(content: string): Promise<unknown>;
    handleNotSuccess(rt: Return): boolean;
    clearHttpOptions(): void;
    setEnvironmentKey(name: string, value: unknown): unknown;
    traverseDeleteEnvironmentKey(...keys: string[]): boolean | any[];
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
    hasInstance<K extends string, V extends ClassType>(key: K, type: V): this is this & {
        [P in keyof {
            bro: boolean;
        } as K]: ClassInstance<V>;
    };
    get<T>(key: PropertyKey): T;
    getInstance<K extends string, T extends ClassType>(key: K, type: T): (this & { [P in keyof {
        bro: boolean;
    } as K]: ClassInstance<T>; })[K] | null;
    private error;
    get getExtension(): {
        <B extends boolean>(name: string, required?: B | undefined): B extends true ? import("..").ForgeExtension : import("..").ForgeExtension | null;
        <T extends ClassType, B_1 extends boolean>(type: string | T, required?: B_1 | undefined): B_1 extends true ? ClassInstance<T> : ClassInstance<T> | null;
    };
    cloneEmpty(): Context;
    /**
     * Clones keywords and environment vars
     * @returns
     */
    clone(props?: Partial<IRunnable>): Context;
}
//# sourceMappingURL=Context.d.ts.map
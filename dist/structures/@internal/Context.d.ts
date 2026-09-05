import { AnySelectMenuInteraction, AutoModerationActionExecution, AutoModerationActionOptions, AutoModerationTriggerMetadataOptions, BaseChannel, ChatInputCommandInteraction, ContextMenuCommandInteraction, Emoji, Entitlement, Guild, GuildMember, GuildScheduledEventEntityMetadataOptions, Interaction, LabelBuilder, MediaGalleryBuilder, Message, MessageReaction, OverwriteResolvable, Role, SectionBuilder, SoundboardSound, Sticker, Subscription, User, VoiceBasedChannel } from "discord.js";
import { CompiledFunction, IExtendedCompiledFunctionField } from "./CompiledFunction";
import { Container, Sendable } from "./Container";
import { IArg, UnwrapArgs } from "./NativeFunction";
import { Return } from "./Return";
import { IRunnable } from "../../core/Interpreter";
import { FormData, Headers } from "undici";
export type ExpectCallback<T extends [...IArg[]], Unwrap extends boolean> = (args: UnwrapArgs<T>) => Promise<Return> | Return;
export declare enum HTTPContentType {
    Json = 0,
    Text = 1
}
export interface IHttpOptions {
    body: string;
    form?: FormData;
    contentType?: HTTPContentType;
    headers: Record<string, string>;
    method: string;
    response?: {
        headers?: Headers;
        ping?: number;
    };
}
export interface IAutomodRuleOptions {
    actions: AutoModerationActionOptions[];
    triggerMetadata?: AutoModerationTriggerMetadataOptions;
    exemptRoles?: string[];
    exemptChannels?: string[];
}
export interface IScheduledEventOptions {
    channel?: VoiceBasedChannel;
    entityMetadata?: GuildScheduledEventEntityMetadataOptions;
}
export interface ILocalFunctionData {
    code: IExtendedCompiledFunctionField;
    args: string[];
}
export interface IComponentOptions {
    section: SectionBuilder;
    gallery: MediaGalleryBuilder;
    label: LabelBuilder;
}
export declare enum CalendarType {
    Buddhist = "buddhist",
    Chinese = "chinese",
    Coptic = "coptic",
    Dangi = "dangi",
    Ethioaa = "ethioaa",
    Ethiopic = "ethiopic",
    Gregory = "gregory",
    Hebrew = "hebrew",
    Indian = "indian",
    Islamic = "islamic",
    IslamicUmalqura = "islamic-umalqura",
    IslamicTbla = "islamic-tbla",
    IslamicCivil = "islamic-civil",
    IslamicRgsa = "islamic-rgsa",
    Iso8601 = "iso8601",
    Japanese = "japanese",
    Persian = "persian",
    Roc = "roc"
}
export type ClassType = new (...args: any[]) => any;
export type ClassInstance<T> = T extends new (...args: any[]) => infer T ? T : never;
export type FilterProperties<T> = {
    [P in keyof T as T[P] extends (...args: any[]) => any ? never : P]: T[P];
};
export interface IContextCache {
    member: GuildMember | null;
    user: User | null;
    guild: Guild | null;
    channel: BaseChannel | null;
    message: Message | null;
    interaction: Interaction | null;
    role: Role | null;
    entitlement: Entitlement | null;
    reaction: MessageReaction | null;
    emoji: Emoji | null;
    automod: AutoModerationActionExecution | null;
    sticker: Sticker | null;
    sound: SoundboardSound | null;
    subscription: Subscription | null;
}
export declare class Context {
    #private;
    readonly runtime: IRunnable;
    [props: PropertyKey]: unknown;
    executionTimestamp: number;
    http: Partial<IHttpOptions>;
    automodRule: Partial<IAutomodRuleOptions>;
    scheduledEvent: Partial<IScheduledEventOptions>;
    component: Partial<IComponentOptions>;
    timezone: string;
    calendar?: CalendarType;
    permissionOverwrites?: OverwriteResolvable[];
    private _reason?;
    container: Container;
    constructor(runtime: IRunnable);
    get client(): import("../..").ForgeClient;
    set obj(o: Sendable);
    set reason(str: string | undefined);
    get reason(): string | undefined;
    get cmd(): import("..").BaseCommand<unknown> | null;
    get obj(): Sendable;
    get args(): string[];
    get states(): import("../..").States | undefined;
    get automod(): AutoModerationActionExecution | null;
    get entitlement(): Entitlement | null;
    get subscription(): Subscription | null;
    get member(): GuildMember | null;
    get emoji(): Emoji | null;
    get sticker(): Sticker | null;
    get sound(): SoundboardSound | null;
    get role(): Role | null;
    get reaction(): MessageReaction | null;
    get message(): Message<any> | null;
    get interaction(): Interaction | null;
    get user(): User | null;
    get guild(): Guild | null;
    get channel(): BaseChannel | import("discord.js").CategoryChannel | import("discord.js").NewsChannel | import("discord.js").StageChannel | import("discord.js").TextChannel | import("discord.js").PublicThreadChannel<boolean> | import("discord.js").PrivateThreadChannel | import("discord.js").VoiceChannel | import("discord.js").ForumChannel | import("discord.js").MediaChannel | null;
    handle<Args extends [...IArg[]], Unwrap extends boolean>(fn: CompiledFunction<Args, Unwrap>, cb: ExpectCallback<Args, Unwrap>): Promise<Return>;
    alert(content: string): Promise<unknown>;
    handleNotSuccess(fn: CompiledFunction, rt: Return): boolean;
    clearHttpOptions(): void;
    clearAutomodRuleOptions(): void;
    clearScheduledEventOptions(): void;
    /**
     * Fetches all emojis of the application.
     * @param once Whether to fetch only when the collection is empty.
     * @returns
     */
    fetchApplicationEmojis(once?: boolean): Promise<void | import("discord.js").Collection<string, import("discord.js").ApplicationEmoji>>;
    setEnvironmentKey(name: string, value: unknown): unknown;
    traverseDeleteEnvironmentKey(...keys: string[]): boolean | any[];
    traverseAddEnvironmentKey(value: unknown, ...keys: string[]): boolean;
    deleteEnvironmentKey(name: string): boolean;
    static traverseGetValue(previous: object, ...args: string[]): object | undefined;
    getEnvironmentKey(...args: string[]): object | undefined;
    getKeyword(name: string): unknown;
    deleteKeyword(name: string): boolean;
    setKeyword(name: string, value: unknown): unknown;
    hasKeyword(name: string): boolean;
    getLocalFunction(name: string): ILocalFunctionData;
    deleteLocalFunction(name: string): boolean;
    setLocalFunction(name: string, data: ILocalFunctionData): ILocalFunctionData;
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
    hasDisabledConsoleErrors(): boolean | undefined;
    getInstance<K extends string, T extends ClassType>(key: K, type: T): (this & { [P in keyof {
        bro: boolean;
    } as K]: ClassInstance<T>; })[K] | null;
    private error;
    get getExtension(): {
        <B extends boolean>(name: string, required?: B): B extends true ? import("..").ForgeExtension : import("..").ForgeExtension | null;
        <T extends ClassType, B extends boolean>(type: T | string, required?: B): B extends true ? ClassInstance<T> : ClassInstance<T> | null;
    };
    cloneEmpty(): Context;
    /**
     * Clones keywords, environment vars, and local functions.
     * @returns
     */
    clone(props?: Partial<IRunnable>, syncVars?: boolean): Context;
    cloneRuntime(): IRunnable;
    private clearCache;
    get noop(): (...args: any[]) => void;
}
//# sourceMappingURL=Context.d.ts.map
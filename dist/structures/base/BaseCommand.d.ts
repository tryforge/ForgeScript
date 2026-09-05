import { ClientEvents, Interaction } from "discord.js";
import { IExtendedCompilationResult, ForgeClient } from "../../core";
import { Context } from "..";
export type CommandType = keyof ClientEvents;
export type RawExecutableCode = (ctx: Context) => Promise<unknown[] | null>;
export type CommandInteractionTypes = "button" | "modal" | "slashCommand" | "autocomplete" | "contextMenu" | "userContextMenu" | "messageContextMenu" | "selectMenu" | "userSelectMenu" | "roleSelectMenu" | "channelSelectMenu" | "mentionableSelectMenu" | "activityCommand" | "messageComponent";
export declare enum PrefixMode {
    /**
     * The command requires a prefix to be executed. This is the default mode.
     */
    Required = 0,
    /**
     * The command can be executed with or without a prefix.
     */
    Optional = 1,
    /**
     * The command requires no prefix to be executed (unprefixed).
     */
    None = 2
}
export interface IBaseCommand<T> {
    /**
     * The name for this command. Used as custom ID filter for `interactionCreate` events.
     */
    name?: string;
    /**
     * The event type the bot will listen to.
     */
    type: T;
    /**
     * The code to run when the event fired.
     */
    code: string;
    /**
     * Whether this command can only be executed on guilds.
     *
     * @default false
     */
    guildOnly?: boolean;
    /**
     * The prefix mode to use for this command.
     *
     * @default PrefixMode.Required
     */
    prefixMode?: PrefixMode;
    /**
     * Whether the command can be executed without a prefix.
     *
     * @deprecated This property is considered legacy, {@link prefixMode} is preferred instead.
     * @default false
     */
    unprefixed?: boolean;
    /**
     * The aliases for this command.
     */
    aliases?: string[];
    /**
     * The interaction types to restrict execution of the `interactionCreate` event to.
     */
    allowedInteractionTypes?: CommandInteractionTypes[];
    /**
     * Allows the bot to execute this event triggered by other bots (and itself).
     *
     * @default false
     */
    allowBots?: boolean;
    /**
     * Whether to disable all possible console errors for this command.
     *
     * @default false
     */
    disableConsoleErrors?: boolean;
    /**
     * Whether the command name and aliases should be case-insensitive, this only affects letters.
     *
     * @default true
     */
    nameCaseInsensitive?: boolean;
    /**
     * @private Do not define.
     */
    path?: string;
    /**
     * @private Do not define.
     */
    unloadable?: boolean;
    [x: PropertyKey]: unknown;
}
export interface ICompiledCommand {
    name?: IExtendedCompilationResult;
    code: IExtendedCompilationResult;
}
export declare class BaseCommand<T> {
    readonly data: IBaseCommand<T>;
    readonly compiled: ICompiledCommand;
    readonly id: number;
    constructor(data: IBaseCommand<T>);
    setPath(p: string): this;
    validate(): void;
    static from(code: string): BaseCommand<null>;
    get name(): string | undefined;
    get type(): T;
    hasDisabledConsoleErrors(client: ForgeClient): boolean | undefined;
    matchesInteractionType(i: Interaction): boolean;
}
//# sourceMappingURL=BaseCommand.d.ts.map
import { Client, ClientOptions, IntentsBitField, Message } from "discord.js";
import { BaseCommand, CommandType } from "../structures/base/BaseCommand";
import { EventManager } from "../managers/EventManager";
import { IExtendedCompilationResult } from "./Compiler";
import { ForgeFunctionManager } from "../managers/ForgeFunctionManager";
import { ForgeExtension } from "../structures/forge/ForgeExtension";
import { CooldownManager } from "../managers/CooldownManager";
import { NativeCommandManager } from "../managers/NativeCommandManager";
import { ApplicationCommandManager } from "../managers/ApplicationCommandManager";
import { ThreadManager } from "../managers/ThreadManager";
import { LogPriority } from "../structures/@internal/Logger";
import { ClassInstance, ClassType } from "../structures";
export interface ITrackers {
    invites?: boolean;
    voice?: boolean;
}
export interface IRestrictions {
    guildIDs?: string[];
    userIDs?: string[];
}
export interface IRawForgeClientOptions extends ClientOptions {
    /**
     * Specifies a folder (path) to load all commands from it
     */
    commands?: string;
    /**
     * The discord.js events our bot will use
     */
    events?: CommandType[];
    /**
     * The prefixes our bot will act upon for command messages
     */
    prefixes: string[];
    /**
     * Specifies the logs to be received
     */
    logLevel?: LogPriority;
    functions?: string;
    /**
     * Allows the bot to execute events triggered by other bots (and itself)
     */
    allowBots?: boolean;
    token?: string;
    /**
     * @deprecated use trackers: { invites: true } instead
     */
    useInviteSystem?: boolean;
    /**
     * This will connect the client to Discord with the mobile status
     */
    mobile?: boolean;
    trackers?: ITrackers;
    /**
     * @deprecated Does not work
     */
    optionalGuildID?: boolean;
    extensions?: ForgeExtension[];
    restrictions?: IRestrictions;
    /**
     * Allows the bot to re-use messages that were edited to find possibly command calls.
     * If a number is passed, it's treated as the amount of milliseconds that can pass before
     * the message becomes completely unusable.
     */
    respondOnEdit?: number | boolean;
    /**
     * Array of function names you want to disable.
     */
    disableFunctions?: string[];
}
export interface IForgeClientOptions extends Omit<IRawForgeClientOptions, "prefixes"> {
    prefixes: IExtendedCompilationResult[];
}
export declare class ForgeClient extends Client<true> {
    #private;
    options: (Omit<ClientOptions, "intents"> & {
        intents: IntentsBitField;
    }) & IForgeClientOptions;
    readonly commands: NativeCommandManager;
    readonly applicationCommands: ApplicationCommandManager;
    readonly events: EventManager;
    readonly cooldowns: CooldownManager;
    readonly functions: ForgeFunctionManager;
    readonly threading: ThreadManager;
    [x: PropertyKey]: unknown;
    constructor(options: IRawForgeClientOptions);
    getExtension<T extends ClassType, B extends boolean>(type: T, required?: B): B extends true ? ClassInstance<T> : ClassInstance<T> | null;
    get<T>(key: string): T;
    get version(): string;
    getPrefix(msg: Message): Promise<string | null>;
    canRespondToBots(cmd: BaseCommand<any>): boolean;
    login(token?: string | undefined): Promise<string>;
}
//# sourceMappingURL=ForgeClient.d.ts.map
import { Client, ClientOptions, IntentsBitField } from "discord.js";
import { BaseCommand, CommandType } from "../structures/BaseCommand";
import { EventManager } from "../managers/EventManager";
import { ForgeFunctionManager } from "../managers/ForgeFunctionManager";
import { ForgeExtension } from "../structures/ForgeExtension";
import { CooldownManager } from "../managers/CooldownManager";
import { NativeCommandManager } from "../managers/NativeCommandManager";
import { ApplicationCommandManager } from "../managers/ApplicationCommandManager";
import { ThreadManager } from "../managers/ThreadManager";
export interface IRestriction {
    guildIDs?: string[];
    userIDs?: string[];
}
export interface IForgeClientOptions extends ClientOptions {
    commands?: string;
    events?: CommandType[];
    prefixes: string[];
    functions?: string;
    allowBots?: boolean;
    token?: string;
    useInviteSystem?: boolean;
    /**
     * @deprecated Does not work
     */
    optionalGuildID?: boolean;
    extensions?: ForgeExtension[];
    restrictions?: IRestriction;
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
    constructor(options: IForgeClientOptions);
    get<T>(key: string): T;
    canRespondToBots(cmd: BaseCommand<any>): boolean;
    login(token?: string | undefined): Promise<string>;
}
//# sourceMappingURL=ForgeClient.d.ts.map
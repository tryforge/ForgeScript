import { Client, ClientOptions, IntentsBitField } from "discord.js";
import { CommandType } from "../structures/BaseCommand";
import { EventManager } from "../managers/EventManager";
import { ForgeFunctionManager } from "../managers/ForgeFunctionManager";
import { ForgeExtension } from "../structures/ForgeExtension";
import { CooldownManager } from "../managers/CooldownManager";
import { NativeCommandManager } from "../managers/NativeCommandManager";
import { ApplicationCommandManager } from "../managers/ApplicationCommandManager";
export interface IRestriction {
    guildIDs?: string[];
    userIDs?: string[];
}
export interface IForgeClientOptions extends ClientOptions {
    commands?: string;
    events?: CommandType[];
    prefixes: string[];
    functions?: string;
    token?: string;
    useInviteSystem?: boolean;
    optionalGuildID?: boolean;
    extensions?: ForgeExtension[];
    restrictions?: IRestriction;
}
export declare class ForgeClient extends Client<true> {
    #private;
    options: (Omit<ClientOptions, "intents"> & {
        intents: IntentsBitField;
    }) & IForgeClientOptions;
    commands: NativeCommandManager;
    applicationCommands: ApplicationCommandManager;
    events: EventManager;
    cooldowns: CooldownManager;
    functions: ForgeFunctionManager;
    [x: PropertyKey]: unknown;
    constructor(options: IForgeClientOptions);
    get<T>(key: string): T;
    login(token?: string | undefined): Promise<string>;
}
//# sourceMappingURL=ForgeClient.d.ts.map
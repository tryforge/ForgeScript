import { ApplicationCommandData, Collection, CommandInteraction, ContextMenuCommandBuilder, SlashCommandBuilder } from "discord.js";
import { ApplicationCommand } from "../structures/ApplicationCommand";
import { ForgeClient } from "../core";
export interface IApplicationCommandData {
    data: SlashCommandBuilder | ContextMenuCommandBuilder | ApplicationCommandData;
    code: string;
}
export declare class ApplicationCommandManager {
    readonly client: ForgeClient;
    private commands;
    constructor(client: ForgeClient);
    load(path: string): void;
    get(input: CommandInteraction): ApplicationCommand | null;
    add(...values: (ApplicationCommand | IApplicationCommandData | ApplicationCommand[] | IApplicationCommandData[])[]): void;
    private loadOne;
    resolve(value: ApplicationCommand | IApplicationCommandData): ApplicationCommand;
    register(): Promise<Collection<string, import("discord.js").ApplicationCommand<{
        guild: import("discord.js").GuildResolvable;
    }>>>;
}
//# sourceMappingURL=ApplicationCommandManager.d.ts.map
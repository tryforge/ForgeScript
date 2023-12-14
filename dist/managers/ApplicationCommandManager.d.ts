import { ApplicationCommandDataResolvable, Collection, CommandInteraction, ContextMenuCommandBuilder, RESTPostAPIChatInputApplicationCommandsJSONBody, RESTPostAPIContextMenuApplicationCommandsJSONBody, SlashCommandBuilder } from "discord.js";
import { ApplicationCommand } from "../structures/ApplicationCommand";
import { ForgeClient } from "../core";
export interface IApplicationCommandData {
    data: SlashCommandBuilder | ContextMenuCommandBuilder | RESTPostAPIChatInputApplicationCommandsJSONBody | RESTPostAPIContextMenuApplicationCommandsJSONBody;
    code: string;
}
export declare class ApplicationCommandManager {
    readonly client: ForgeClient;
    /**
     * If:
     * - value is app command = slash command
     * - value is collection:
     *  - value is slash command = subcommands
     *  - value is collection = group with subcommands
     */
    private commands;
    private path;
    constructor(client: ForgeClient);
    /**
     * PATH TREE MATTERS
     * @param path
     */
    load(path?: string): void;
    get(input: CommandInteraction): ApplicationCommand | null;
    /**
     * **WARNING** This function does not allow subcommand & subcommand group options. Consider using ApplicationCommandManager#load to load a tree from a folder.
     * @param values
     * @returns
     */
    add(...values: (ApplicationCommand | IApplicationCommandData | ApplicationCommand[] | IApplicationCommandData[])[]): void;
    private loadOne;
    private validate;
    resolve(value: ApplicationCommand | IApplicationCommandData): ApplicationCommand;
    toJSON(): ApplicationCommandDataResolvable[];
    register(): Promise<Collection<string, import("discord.js").ApplicationCommand<{
        guild: import("discord.js").GuildResolvable;
    }>>>;
}
//# sourceMappingURL=ApplicationCommandManager.d.ts.map
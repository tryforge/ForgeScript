import { ApplicationCommandDataResolvable, Collection, CommandInteraction, ContextMenuCommandBuilder, Guild, Interaction, RESTPostAPIChatInputApplicationCommandsJSONBody, RESTPostAPIContextMenuApplicationCommandsJSONBody, SlashCommandBuilder } from "discord.js";
import { ApplicationCommand } from "../structures/base/ApplicationCommand";
import { ForgeClient } from "../core";
export declare enum RegistrationType {
    Global = 0,
    Guild = 1,
    All = 2
}
export interface IApplicationCommandData {
    data: SlashCommandBuilder | ContextMenuCommandBuilder | RESTPostAPIChatInputApplicationCommandsJSONBody | RESTPostAPIContextMenuApplicationCommandsJSONBody;
    code: string;
    type?: RegistrationType;
    independent?: boolean;
    path?: string | null;
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
    private getDisplayOptions;
    getDisplay(input: Interaction | null, hideName: boolean): string | null;
    get(input: CommandInteraction): ApplicationCommand | null;
    /**
     * **WARNING** This function does not allow subcommand & subcommand group options. Consider using ApplicationCommandManager#load to load a tree from a folder.
     * @param values
     * @returns
     */
    add(...values: (ApplicationCommand | IApplicationCommandData | ApplicationCommand[] | IApplicationCommandData[])[]): void;
    private loadOne;
    private validate;
    resolve(value: ApplicationCommand | IApplicationCommandData, path: string | null): ApplicationCommand;
    toJSON(type: Parameters<ApplicationCommand["mustRegisterAs"]>[0]): ApplicationCommandDataResolvable[];
    registerGlobal(): Promise<Collection<string, import("discord.js").ApplicationCommand<{
        guild: import("discord.js").GuildResolvable;
    }>>> | undefined;
    registerGuild(g: Guild): Promise<Collection<string, import("discord.js").ApplicationCommand<{}>>> | undefined;
}
//# sourceMappingURL=ApplicationCommandManager.d.ts.map
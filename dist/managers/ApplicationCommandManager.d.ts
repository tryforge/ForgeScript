import { ApplicationCommandDataResolvable, CommandInteraction, ContextMenuCommandBuilder, Interaction, RESTPostAPIChatInputApplicationCommandsJSONBody, RESTPostAPIContextMenuApplicationCommandsJSONBody, SlashCommandBuilder } from "discord.js";
import { ApplicationCommand } from "../structures/base/ApplicationCommand";
import { ForgeClient } from "../core";
export interface IApplicationCommandData {
    data: SlashCommandBuilder | ContextMenuCommandBuilder | RESTPostAPIChatInputApplicationCommandsJSONBody | RESTPostAPIContextMenuApplicationCommandsJSONBody;
    code: string;
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
    toJSON(): ApplicationCommandDataResolvable[];
    register(): any;
}
//# sourceMappingURL=ApplicationCommandManager.d.ts.map
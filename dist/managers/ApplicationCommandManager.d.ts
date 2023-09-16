import { ApplicationCommandData, CommandInteraction, ContextMenuCommandBuilder, SlashCommandBuilder } from "discord.js";
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
    get(input: CommandInteraction): any;
    add(...values: (ApplicationCommand | IApplicationCommandData | ApplicationCommand[] | IApplicationCommandData[])[]): void;
    private loadOne;
    resolve(value: ApplicationCommand | IApplicationCommandData): ApplicationCommand;
    register(): any;
}
//# sourceMappingURL=ApplicationCommandManager.d.ts.map
import { IExtendedCompilationResult } from "../core";
import { IApplicationCommandData } from "../managers/ApplicationCommandManager";
export declare class ApplicationCommand {
    readonly options: IApplicationCommandData;
    compiled: IExtendedCompilationResult;
    constructor(options: IApplicationCommandData);
    get name(): string;
    toJSON(): import("discord.js").RESTPostAPIChatInputApplicationCommandsJSONBody | import("discord.js").RESTPostAPIContextMenuApplicationCommandsJSONBody;
}
//# sourceMappingURL=ApplicationCommand.d.ts.map
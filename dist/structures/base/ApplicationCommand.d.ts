import { RESTPostAPIApplicationCommandsJSONBody } from "discord.js";
import { IExtendedCompilationResult } from "../../core";
import { IApplicationCommandData, RegistrationType } from "../../managers/ApplicationCommandManager";
export declare class ApplicationCommand {
    readonly options: IApplicationCommandData;
    compiled: IExtendedCompilationResult;
    constructor(options: IApplicationCommandData);
    get name(): string;
    get path(): string;
    get registrationType(): RegistrationType;
    mustRegisterAs(type: Exclude<RegistrationType, RegistrationType.All>): boolean;
    toJSON(): RESTPostAPIApplicationCommandsJSONBody;
}
//# sourceMappingURL=ApplicationCommand.d.ts.map
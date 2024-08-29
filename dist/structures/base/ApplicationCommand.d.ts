import { IExtendedCompilationResult } from "../../core";
import { IApplicationCommandData, RegistrationType } from "../../managers/ApplicationCommandManager";
export declare class ApplicationCommand {
    readonly options: IApplicationCommandData;
    compiled: IExtendedCompilationResult;
    constructor(options: IApplicationCommandData);
    get name(): any;
    get registrationType(): RegistrationType;
    mustRegisterAs(type: Exclude<RegistrationType, RegistrationType.All>): boolean;
    toJSON(): any;
}
//# sourceMappingURL=ApplicationCommand.d.ts.map
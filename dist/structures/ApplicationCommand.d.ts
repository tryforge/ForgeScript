import { IExtendedCompilationResult } from "../core";
import { IApplicationCommandData } from "../managers/ApplicationCommandManager";
export declare class ApplicationCommand {
    readonly options: IApplicationCommandData;
    compiled: IExtendedCompilationResult;
    constructor(options: IApplicationCommandData);
    get name(): string;
}
//# sourceMappingURL=ApplicationCommand.d.ts.map
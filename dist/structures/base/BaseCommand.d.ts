import { ClientEvents, Interaction } from "discord.js";
import { Context } from "..";
import { IExtendedCompilationResult, ForgeClient } from "../../core";
export type CommandType = keyof ClientEvents;
export type RawExecutableCode = (ctx: Context) => Promise<unknown[] | null>;
export type CommandInteractionTypes = "button" | "modal" | "slashCommand" | "autocomplete" | "contextMenu" | "selectMenu";
export interface IBaseCommand<T> {
    name?: string;
    type: T;
    code: string;
    guildOnly?: boolean;
    unprefixed?: boolean;
    aliases?: string[];
    allowedInteractionTypes?: CommandInteractionTypes[];
    allowBots?: boolean;
    disableConsoleErrors?: boolean;
    [x: PropertyKey]: unknown;
    /**
     * @private Do not define
     */
    path?: string;
    /**
     * @private Do not define
     */
    unloadable?: boolean;
}
export interface ICompiledCommand {
    name?: IExtendedCompilationResult;
    code: IExtendedCompilationResult;
}
export declare class BaseCommand<T> {
    readonly data: IBaseCommand<T>;
    readonly compiled: ICompiledCommand;
    readonly id: number;
    constructor(data: IBaseCommand<T>);
    setPath(p: string): this;
    validate(): void;
    static from(code: string): BaseCommand<null>;
    get name(): string | undefined;
    get type(): T;
    hasDisabledConsoleErrors(client: ForgeClient): boolean | undefined;
    matchesInteractionType(i: Interaction): boolean;
}
//# sourceMappingURL=BaseCommand.d.ts.map
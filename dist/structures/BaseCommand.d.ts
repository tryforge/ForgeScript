import { ClientEvents, Interaction } from "discord.js";
import { IExtendedCompilationResult } from "../core/Compiler";
export type CommandType = keyof ClientEvents;
export type CommandInteractionTypes = "button" | "modal" | "autocomplete" | "contextMenu" | "selectMenu";
export interface IBaseCommand<T> {
    name?: string;
    type: T;
    code: string;
    guildOnly?: boolean;
    unprefixed?: boolean;
    aliases?: string[];
    allowedInteractionTypes?: CommandInteractionTypes[];
    allowBots?: boolean;
    [x: PropertyKey]: unknown;
}
export interface ICompiledCommand {
    name?: IExtendedCompilationResult;
    code: IExtendedCompilationResult;
}
export declare class BaseCommand<T> {
    readonly data: IBaseCommand<T>;
    unloadable: boolean;
    readonly compiled: ICompiledCommand;
    constructor(data: IBaseCommand<T>, unloadable?: boolean);
    static from(code: string): BaseCommand<null>;
    get name(): string | undefined;
    get type(): T;
    matchesInteractionType(i: Interaction): boolean;
}
//# sourceMappingURL=BaseCommand.d.ts.map
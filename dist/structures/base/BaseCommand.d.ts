import { ClientEvents, Interaction } from "discord.js";
import { IExtendedCompilationResult } from "../../core/Compiler";
import { Context } from "..";
export type CommandType = keyof ClientEvents;
export type RawExecutableCode = (ctx: Context) => Promise<unknown[] | null>;
export type CommandInteractionTypes = "button" | "modal" | "autocomplete" | "contextMenu" | "selectMenu";
export interface IBaseCommand<T> {
    name?: string;
    path?: string;
    type: T;
    code: string;
    guildOnly?: boolean;
    unprefixed?: boolean;
    aliases?: string[];
    allowedInteractionTypes?: CommandInteractionTypes[];
    allowBots?: boolean;
    unloadable?: boolean;
    [x: PropertyKey]: unknown;
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
    matchesInteractionType(i: Interaction): boolean;
}
//# sourceMappingURL=BaseCommand.d.ts.map
import { ClientEvents } from "discord.js";
import { IExtendedCompilationResult } from "../core/Compiler";
export type CommandType = keyof ClientEvents;
export interface IBaseCommand<T> {
    name?: string;
    type: T;
    code: string;
    guildOnly?: boolean;
    unprefixed?: boolean;
    aliases?: string[];
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
    get name(): string | undefined;
    get type(): T;
}
//# sourceMappingURL=BaseCommand.d.ts.map
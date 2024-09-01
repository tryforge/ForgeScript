import { ForgeClient } from "../core";
import { BaseCommand, IBaseCommand } from "../structures";
import { TypedEmitter } from "tiny-typed-emitter";
export interface ICommandManagerEvents<T> {
    update: () => void;
}
export declare abstract class BaseCommandManager<T> extends TypedEmitter<ICommandManagerEvents<T>> {
    private readonly client;
    private readonly commands;
    private readonly paths;
    abstract handlerName: string;
    constructor(client: ForgeClient);
    refresh(): void;
    load(path: string): void;
    get count(): number;
    get(type: T, fn?: (cmd: BaseCommand<T>) => boolean): BaseCommand<T>[];
    add(...commands: (IBaseCommand<T> | BaseCommand<T>)[]): void;
    private addPath;
    toArray(): BaseCommand<T>[];
}
//# sourceMappingURL=BaseCommandManager.d.ts.map
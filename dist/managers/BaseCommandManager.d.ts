import { ForgeClient } from "../core";
import { BaseCommand, IBaseCommand } from "../structures";
export declare abstract class BaseCommandManager<T> {
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
}
//# sourceMappingURL=BaseCommandManager.d.ts.map
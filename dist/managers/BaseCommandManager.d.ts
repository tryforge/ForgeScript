import { ForgeClient } from "../core/ForgeClient";
import { BaseCommand, IBaseCommand } from "../structures";
export declare class BaseCommandManager<T> {
    private readonly client;
    private readonly commands;
    private readonly paths;
    constructor(client: ForgeClient);
    refresh(): void;
    load(path: string): void;
    get(type: T, fn?: (cmd: BaseCommand<T>) => boolean): BaseCommand<T>[];
    add(...commands: (IBaseCommand<T> | BaseCommand<T>)[]): void;
    private addPath;
}
//# sourceMappingURL=BaseCommandManager.d.ts.map
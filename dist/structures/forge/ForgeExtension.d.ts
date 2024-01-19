import { ForgeClient } from "../../core";
import { BaseCommandManager } from "../../managers";
export declare abstract class ForgeExtension {
    private _commands?;
    abstract name: string;
    abstract description: string;
    abstract version: string;
    /**
     * Only the versions written here will be allowed
     */
    targetVersions?: string[];
    /**
     * A list of extension names this extension requires
     */
    requireExtensions?: string[];
    abstract init(client: ForgeClient): void;
    protected validateAndInit(client: ForgeClient): void;
    protected load(path: string): void;
    getCommandManager(): ((string extends infer T ? T extends string ? T extends keyof this ? this[T] : any : never : never) & BaseCommandManager<any>) | null;
}
//# sourceMappingURL=ForgeExtension.d.ts.map
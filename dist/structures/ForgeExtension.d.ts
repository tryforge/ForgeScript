import { ForgeClient } from "../core/ForgeClient";
export declare abstract class ForgeExtension {
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
}
//# sourceMappingURL=ForgeExtension.d.ts.map
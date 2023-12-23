import { ForgeClient } from "../core/ForgeClient";
import { ForgeExtension } from "../structures/ForgeExtension";
export declare class MyExtension extends ForgeExtension {
    description: string;
    name: string;
    version: string;
    requireExtensions: string[];
    targetVersions: string[];
    init(client: ForgeClient): void;
}
//# sourceMappingURL=ext.d.ts.map
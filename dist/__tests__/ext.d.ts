import { ForgeClient } from "../core/ForgeClient";
import { ForgeExtension } from "../structures/forge/ForgeExtension";
export declare class MyExtension extends ForgeExtension {
    description: string;
    name: string;
    version: string;
    static client: ForgeClient;
    init(client: ForgeClient): void;
}
//# sourceMappingURL=ext.d.ts.map
import { ForgeClient } from "../core/ForgeClient";
import { BaseCommandManager } from "../managers";
import { ForgeExtension } from "../structures/forge/ForgeExtension";
export declare class RndManager extends BaseCommandManager<{}> {
    handlerName: string;
}
export declare class MyExtension extends ForgeExtension {
    description: string;
    name: string;
    version: string;
    random: RndManager;
    init(client: ForgeClient): void;
}
//# sourceMappingURL=ext.d.ts.map
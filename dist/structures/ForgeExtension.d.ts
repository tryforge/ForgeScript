import { ForgeClient } from "../core/ForgeClient";
export declare abstract class ForgeExtension {
    abstract name: string;
    abstract description: string;
    abstract version: string;
    abstract init(client: ForgeClient): void;
}
//# sourceMappingURL=ForgeExtension.d.ts.map
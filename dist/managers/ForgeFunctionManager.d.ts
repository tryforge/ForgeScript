import { ForgeClient } from "../core/ForgeClient";
import { ForgeFunction, IForgeFunction } from "../structures/ForgeFunction";
export declare class ForgeFunctionManager {
    private readonly client;
    private readonly functions;
    constructor(client: ForgeClient);
    add(options: IForgeFunction): void;
    get(name: string): ForgeFunction | undefined;
    load(path: string): void;
}
//# sourceMappingURL=ForgeFunctionManager.d.ts.map
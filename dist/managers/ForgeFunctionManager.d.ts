import { ForgeClient } from "../core/ForgeClient";
import { ForgeFunction, IForgeFunction } from "../structures/forge/ForgeFunction";
import { RecursiveArray } from "./FunctionManager";
export declare class ForgeFunctionManager {
    private readonly client;
    private readonly functions;
    constructor(client: ForgeClient);
    add(...options: RecursiveArray<IForgeFunction | ForgeFunction>[]): void;
    resolve(s: IForgeFunction | ForgeFunction): ForgeFunction;
    populate(): void;
    get(name: string): ForgeFunction | undefined;
    load(path: string): void;
}
//# sourceMappingURL=ForgeFunctionManager.d.ts.map
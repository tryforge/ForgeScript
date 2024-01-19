import { ForgeClient } from "../core";
export interface ICooldown {
    duration: number;
    startedAt: number;
}
export declare class CooldownManager {
    private readonly client;
    private readonly cooldowns;
    constructor(client: ForgeClient);
    add(id: string, duration: number): void;
    delete(id: string): void;
    clear(): void;
    getTimeLeft(id: string): number;
}
//# sourceMappingURL=CooldownManager.d.ts.map
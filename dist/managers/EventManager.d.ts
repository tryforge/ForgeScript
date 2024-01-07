import { type ForgeClient } from "../core/ForgeClient";
import { BaseEventHandler } from "../structures";
export declare const NativeEventName = "native";
export declare class EventManager {
    private readonly client;
    static readonly Loaded: Partial<Record<string, Record<string, BaseEventHandler>>>;
    private events;
    constructor(client: ForgeClient);
    static loadNative(): void;
    load(name: string, ...events: (string | string[])[]): void;
    static load(name: string, path: string): void;
    static toJSON(name: string): {
        name: string;
        description: string;
        listener: (this: ForgeClient, ...args: unknown[]) => void | Promise<void>;
        version?: string | undefined;
        intents?: GatewayIntentsString[] | undefined;
    }[];
    has(handler: string, type: any): any;
}
//# sourceMappingURL=EventManager.d.ts.map
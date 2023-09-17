import { ForgeClient } from "../core/ForgeClient";
import { BaseEventHandler } from "../structures";
export declare const NativeEventName = "native";
export declare class EventManager {
    private readonly client;
    static readonly Loaded: Partial<Record<string, Record<string, BaseEventHandler>>>;
    private events;
    constructor(client: ForgeClient);
    load(name: string, ...events: (string | string[])[]): void;
    has(event: string): any;
    static load(name: string, path: string): void;
    static toJSON(name: string): {
        name: string;
        description: string;
        listener: (this: ForgeClient, ...args: unknown[]) => void | Promise<void>;
        version?: string | undefined;
        intents?: GatewayIntentsString[] | undefined;
    }[];
}
//# sourceMappingURL=EventManager.d.ts.map
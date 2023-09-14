import { GatewayIntentsString } from "discord.js";
import { ForgeClient } from "../core/ForgeClient";
export type AssertArgs<T> = T extends unknown[] ? T : never;
export interface IEvent<Events, T extends keyof Events> {
    name: T;
    description: string;
    listener: (this: ForgeClient, ...args: AssertArgs<Events[T]>) => Promise<void> | void;
    version?: string;
    intents?: GatewayIntentsString[];
}
export declare class BaseEventHandler<Events = Record<string, unknown[]>, T extends keyof Events = keyof Events> {
    readonly data: IEvent<Events, T>;
    constructor(data: IEvent<Events, T>);
    get listener(): (this: ForgeClient, ...args: AssertArgs<Events[T]>) => void | Promise<void>;
    get description(): string;
    get name(): T;
    register(client: ForgeClient): void;
}
//# sourceMappingURL=BaseEventHandler.d.ts.map
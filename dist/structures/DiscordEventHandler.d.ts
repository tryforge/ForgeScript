import { ClientEvents } from "discord.js";
import { ForgeClient } from "../core/ForgeClient";
import { BaseEventHandler } from "./BaseEventHandler";
export declare class DiscordEventHandler<T extends keyof ClientEvents> extends BaseEventHandler<ClientEvents, T> {
    register(client: ForgeClient): void;
}
//# sourceMappingURL=DiscordEventHandler.d.ts.map
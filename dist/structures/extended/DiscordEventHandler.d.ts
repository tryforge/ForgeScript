import { type ClientEvents } from "discord.js";
import { type ForgeClient } from "../../core/ForgeClient";
import { BaseEventHandler } from "../base/BaseEventHandler";
export declare class DiscordEventHandler<T extends keyof ClientEvents> extends BaseEventHandler<ClientEvents, T> {
    register(client: ForgeClient): void;
}
//# sourceMappingURL=DiscordEventHandler.d.ts.map
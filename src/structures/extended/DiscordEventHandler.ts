import { ClientEvents, GatewayIntentsString } from "discord.js"
import { ForgeClient } from "../../core/ForgeClient"
import { BaseEventHandler } from "../base/BaseEventHandler"

export class DiscordEventHandler<T extends keyof ClientEvents> extends BaseEventHandler<ClientEvents, T> {
    public register(client: ForgeClient): void {
        client.on(this.name, this.listener.bind(client) as any)
    }
}

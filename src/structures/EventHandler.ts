import { ClientEvents } from "discord.js"
import { ForgeClient } from "../core/ForgeClient"

export class EventHandler<T extends keyof ClientEvents = keyof ClientEvents> {
    public constructor(
        public readonly name: T,
        public readonly listener: (this: ForgeClient, ...args: ClientEvents[T]) => Promise<void> | void
    ) {}
}
import { ClientEvents, GatewayIntentsString } from "discord.js"
import { ForgeClient } from "../core/ForgeClient"

export interface IEvent<T extends keyof ClientEvents = keyof ClientEvents> {
    name: T
    description: string
    listener: (this: ForgeClient, ...args: ClientEvents[T]) => Promise<void> | void
    version?: string
    intents?: GatewayIntentsString[]
}

export class EventHandler<T extends keyof ClientEvents = keyof ClientEvents> {
    public constructor(
        public readonly data: IEvent<T>
    ) {}

    public get listener() {
        return this.data.listener
    }

    public get description() {
        return this.data.description
    }

    public get name() {
        return this.data.name
    }
}
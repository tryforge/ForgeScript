import { ClientEvents, GatewayIntentsString } from "discord.js"
import { ForgeClient } from "../core/ForgeClient"

export type AssertArgs<T> = T extends unknown[] ? T : never

export interface IEvent<Events, T extends keyof Events> {
    name: T
    description: string
    listener: (this: ForgeClient, ...args: AssertArgs<Events[T]>) => Promise<void> | void
    version?: string
    intents?: GatewayIntentsString[]
}

export class BaseEventHandler<Events = Record<string, unknown[]>, T extends keyof Events = keyof Events> {
    public constructor(public readonly data: IEvent<Events, T>) {}

    public get listener() {
        return this.data.listener
    }

    public get description() {
        return this.data.description
    }

    public get name() {
        return this.data.name
    }

    public register(client: ForgeClient) {}
}

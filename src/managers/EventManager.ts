import { ClientEvents, Collection } from "discord.js"
import { ForgeClient } from "../core/ForgeClient"
import { CommandType } from "../structures/Command"
import { readdirSync } from "fs"
import recursiveReaddirSync from "../functions/recursiveReaddirSync"
import { BaseEventHandler } from "../structures"

export class EventManager {
    public static readonly Loaded: Partial<Record<string, BaseEventHandler>> = {}
    
    private events = new Collection<string, BaseEventHandler>()

    public constructor(private readonly client: ForgeClient) {}

    load(...events: (string | string[])[]): void {
        for (const eventType of events.flat()) {
            const event = EventManager.Loaded[eventType]
            if (!event) throw new Error(`Event ${eventType} is not supported.`)
            if (this.events.has(eventType)) continue
            this.events.set(eventType, event)
            event.register(this.client)
        }
    }

    public has(event: string) {
        return this.events.has(event)
    }

    public static load(path: string) {
        for (const file of recursiveReaddirSync(path).filter(x => x.endsWith(".js"))) {
            const req = require(file).default as BaseEventHandler
            this.Loaded[req.name] = req
        }
    }

    public static toJSON() {
        return Object.values(this.Loaded).map(x => ({...x!.data}))
    }
}

// eslint-disable-next-line no-undef
EventManager.load(__dirname + "/../handlers/events")
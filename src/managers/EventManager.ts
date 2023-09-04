import { ClientEvents, Collection } from "discord.js"
import { ForgeClient } from "../core/ForgeClient"
import { CommandType } from "../structures/Command"
import { readdirSync } from "fs"
import { EventHandler } from "../structures/EventHandler"
import recursiveReaddirSync from "../functions/recursiveReaddirSync"

export class EventManager {
    public static readonly Loaded: Partial<Record<CommandType, EventHandler>> = {}
    
    private events = new Collection<CommandType, EventHandler>()

    public constructor(private readonly client: ForgeClient) {}

    load(...events: (CommandType | CommandType[])[]): void {
        for (const eventType of events.flat()) {
            const event = EventManager.Loaded[eventType]
            if (!event) throw new Error(`Event ${eventType} is not supported.`)
            if (this.events.has(eventType)) continue
            this.events.set(eventType, event)
            this.client.on(eventType, event.listener.bind(this.client))
        }
    }

    public has(event: CommandType) {
        return this.events.has(event)
    }

    public static load(path: string) {
        for (const file of recursiveReaddirSync(path).filter(x => x.endsWith(".js"))) {
            const req = require(file).default as EventHandler
            this.Loaded[req.name] = req
        }
    }

    public static toJSON() {
        return Object.values(this.Loaded).map(x => ({...x.data}))
    }
}

// eslint-disable-next-line no-undef
EventManager.load(__dirname + "/../handlers/events")
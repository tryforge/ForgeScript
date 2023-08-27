import { ClientEvents, Collection } from "discord.js"
import { ForgeClient } from "../core/ForgeClient"
import { CommandType } from "../structures/Command"
import { readdirSync } from "fs"
import { EventHandler } from "../structures/EventHandler"
import recursiveReaddirSync from "../functions/recursiveReaddirSync"

export class EventManager {
    public static readonly Loaded: Partial<Record<CommandType, EventHandler["listener"]>> = {}
    
    public events = new Collection<CommandType, EventHandler["listener"]>()

    public constructor(private readonly client: ForgeClient) {}

    load(events: CommandType[]) {
        this.events.clear()
        
        for (const eventType of events) {
            const event = EventManager.Loaded[eventType]
            if (!event) throw new Error(`Event ${eventType} is not supported.`)
            this.events.set(eventType, this.client.on(eventType, event.bind(this.client)) as any)
        }
    }

    public static load(path: string) {
        for (const file of recursiveReaddirSync(path).filter(x => x.isFile() && x.name.endsWith(".js"))) {
            const req = require(`${file.path}/${file.name}`).default as EventHandler
            this.Loaded[req.name] = req.listener
        }
    }
}

// eslint-disable-next-line no-undef
EventManager.load(__dirname + "/../handlers/events")
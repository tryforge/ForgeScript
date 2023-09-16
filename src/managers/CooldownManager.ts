import { Collection } from "discord.js"
import { ForgeClient } from "../core"

export interface ICooldown {
    duration: number
    startedAt: number
}

export class CooldownManager {
    private readonly cooldowns = new Collection<string, ICooldown>()

    public constructor(private readonly client: ForgeClient) {}

    public add(id: string, dur: number) {
        this.cooldowns.set(id, {
            startedAt: Date.now(),
            duration: Date.now(),
        })
    }

    public delete(id: string) {
        this.cooldowns.delete(id)
    }

    public clear() {
        this.cooldowns.clear()
    }

    public getTimeLeft(id: string) {
        const data = this.cooldowns.get(id)
        return data ? Math.max(data.duration - (Date.now() - data.startedAt), 0) : 0
    }
}

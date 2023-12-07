import { AutoModerationActionType } from "discord.js"
import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$automodDuration",
    version: "1.2.0",
    description: "The duration in ms by this automod action",
    unwrap: false,
    execute(ctx) {
        const dur = ctx.automod?.action.metadata.durationSeconds
        return Return.success(dur ? dur * 1000 : null)
    },
})
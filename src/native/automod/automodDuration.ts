import { AutoModerationActionType } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$automodDuration",
    version: "1.2.0",
    description: "Returns the duration in ms by this automod action",
    unwrap: false,
    output: ArgType.Number,
    execute(ctx) {
        const dur = ctx.automod?.action.metadata.durationSeconds
        return this.success(dur ? dur * 1000 : null)
    },
})
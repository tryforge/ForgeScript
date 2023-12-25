import { AutoModerationActionType } from "discord.js"
import { NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$automodCustomMessage",
    category: "automod",
    version: "1.2.0",
    description: "The custom message used by automod on this detection",
    unwrap: false,
    execute(ctx) {
        return this.success(ctx.automod?.action.metadata.customMessage)
    },
})
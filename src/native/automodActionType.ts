import { AutoModerationActionType } from "discord.js"
import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$automodActionType",
    category: "unknown",
    version: "1.2.0",
    description: "The action type automod used",
    unwrap: false,
    execute(ctx) {
        const type = ctx.automod?.action.type
        return this.success(type ? AutoModerationActionType[type] : null)
    },
})
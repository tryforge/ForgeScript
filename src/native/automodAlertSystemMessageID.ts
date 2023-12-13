import { AutoModerationActionType } from "discord.js"
import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$automodAlertSystemMessageID",
    version: "1.2.0",
    description: "The message sent by automod",
    unwrap: false,
    execute(ctx) {
        return this.success(ctx.automod?.alertSystemMessageId)
    },
})
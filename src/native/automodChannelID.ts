import { AutoModerationActionType } from "discord.js"
import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$automodChannelID",
    version: "1.2.0",
    description: "The channel id for automod",
    unwrap: false,
    execute(ctx) {
        return Return.success(ctx.automod?.action.metadata.channelId)
    },
})
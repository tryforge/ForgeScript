import { AutoModerationActionType } from "discord.js"
import { NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$automodChannelID",
    category: "automod",
    version: "1.2.0",
    description: "The channel id for automod",
    unwrap: false,
    execute(ctx) {
        return this.success(ctx.automod?.action.metadata.channelId)
    },
})
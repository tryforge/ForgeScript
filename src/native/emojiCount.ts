import { ChannelType } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$emojiCount",
    description: "Returns the emoji count of all servers",
    unwrap: true,
    execute(ctx) {
        return Return.success(ctx.client.emojis.cache.size)
    },
})
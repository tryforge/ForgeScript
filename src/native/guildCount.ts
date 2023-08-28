import { ChannelType } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$guildCount",
    description: "Returns the guild count",
    unwrap: true,
    execute(ctx) {
        return Return.success(
            ctx.client.guilds.cache.size
        )
    },
})
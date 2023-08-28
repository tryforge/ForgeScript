import { ChannelType } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$guildEmojiCount",
    description: "Returns the emoji count of a guild",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to get emotes from",
            rest: false,
            type: ArgType.Guild,
            required: true,
        }
    ],
    execute(ctx, [ guild ]) {
        guild ??= ctx.guild!
        return Return.success(
            guild.emojis.cache.size
        )
    },
})
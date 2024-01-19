import { ChannelType } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$randomGuildChannelID",
    version: "1.0.3",
    description: "Returns a random channel ID of a guild",
    unwrap: true,
    brackets: false,
    output: ArgType.Channel,
    args: [
        {
            name: "guild ID",
            description: "The guild to get channel from",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "type",
            description: "The channel types to get an id from",
            type: ArgType.Enum,
            rest: true,
            required: false,
            enum: ChannelType
        }
    ],
    execute(ctx, [g, types]) {
        g ??= ctx.guild!
        return this.success(
            types.length === 0 ? g?.channels.cache.randomKey() :
                g?.channels.cache.filter(x => types.includes(x.type)).randomKey()
        )
    },
})

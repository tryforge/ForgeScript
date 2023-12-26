import { ChannelType } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$guildChannelCount",
    version: "1.0.0",
    description: "Returns the server channel count",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to get channels from",
            rest: false,
            type: ArgType.Guild,
            required: true,
        },
        {
            name: "categories",
            description: "The categories to filter by",
            rest: true,
            required: true,
            enum: ChannelType,
            type: ArgType.Enum,
        },
    ],
    execute(ctx, [guild, categories]) {
        guild ??= ctx.guild!
        return this.success(
            (this.hasFields ? categories.length === 0 ? guild.channels.cache : guild.channels.cache.filter((x) => categories.includes(x.type)) : guild.channels.cache)
                .size
        )
    },
})

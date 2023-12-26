import { ChannelType } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$channelCount",
    version: "1.0.0",
    description: "Returns the channel count of all servers",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "categories",
            description: "The categories to filter by",
            rest: true,
            required: true,
            enum: ChannelType,
            type: ArgType.Enum,
        },
    ],
    execute(ctx, [categories]) {
        return this.success(
            (this.hasFields
                ? ctx.client.channels.cache.filter((x) => categories.includes(x.type))
                : ctx.client.channels.cache
            ).size
        )
    },
})

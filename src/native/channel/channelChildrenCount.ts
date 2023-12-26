import { BaseChannel, CategoryChannel, ChannelType } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$channelChildrenCount",
    version: "1.0.3",
    description: "Returns the amount of children this category has",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The category to get its child count",
            rest: false,
            type: ArgType.Channel,
            required: true,
            check: (i: BaseChannel) => i.type === ChannelType.GuildCategory,
        },
    ],
    execute(ctx, [channel]) {
        return this.success(((channel ?? ctx.channel) as CategoryChannel)?.children?.cache.size)
    },
})

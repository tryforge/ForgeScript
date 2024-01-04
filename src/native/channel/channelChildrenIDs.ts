import { BaseChannel, CategoryChannel, ChannelType } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"
import array from "../../functions/array"

export default new NativeFunction({
    name: "$channelChildrenIDs",
    version: "1.0.3",
    description: "Returns the children ids this category has",
    brackets: false,
    output: array<ArgType.Channel>(),
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The category to get its children",
            rest: false,
            type: ArgType.Channel,
            required: true,
            check: (i: BaseChannel) => i.type === ChannelType.GuildCategory,
        },
        {
            name: "separator",
            description: "The separator to use for every channel",
            rest: false,
            type: ArgType.String,
        },
    ],
    execute(ctx, [channel, sep]) {
        return this.success(
            ((channel ?? ctx.channel) as CategoryChannel)?.children?.cache.map((x) => x.id).join(sep || ", ")
        )
    },
})

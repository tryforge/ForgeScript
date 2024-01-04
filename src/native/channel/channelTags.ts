import { BaseChannel, ThreadChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"
import array from "../../functions/array"

export default new NativeFunction({
    name: "$channelTags",
    version: "1.0.3",
    description: "Retrieves tags from a forum thread",
    unwrap: true,
    output: array<ArgType.String>(),
    args: [
        {
            name: "channel ID",
            description: "The channel to get tags of",
            rest: false,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isThread(),
        },
        {
            name: "separator",
            description: "The separator to use for every tag",
            rest: false,
            type: ArgType.String,
        },
    ],
    brackets: false,
    execute(ctx, [ch, sep]) {
        const channel = (ch ?? ctx.channel) as ThreadChannel | undefined
        return this.success(channel?.appliedTags.join(sep || ", "))
    },
})

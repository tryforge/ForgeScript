import { ChannelFlags } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"
import array from "../../functions/array"

export default new NativeFunction({
    name: "$channelFlags",
    version: "1.5.0",
    description: "Returns the flags of a channel",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The id of the channel",
            rest: false,
            type: ArgType.Channel,
            required: true,
        },
        {
            name: "separator",
            description: "The separator to use for every flag",
            type: ArgType.String,
            required: false,
            rest: false,
        },
    ],
    output: array(ChannelFlags),
    execute(ctx, [channel, sep]) {
        return this.success((channel ?? ctx.channel)?.flags?.toArray().join(sep ?? ", "))
    },
})
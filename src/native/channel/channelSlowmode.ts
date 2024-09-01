import { BaseChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$channelSlowmode",
    version: "1.5.0",
    description: "Returns the channel slowmode in seconds",
    unwrap: true,
    output: ArgType.Number,
    brackets: false,
    args: [
        {
            name: "channel ID",
            description: "The id of the channel to get its slowmode",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => "rateLimitPerUser" in i,
        },
    ],
    execute(ctx, [ch]) {
        const chan = ch ?? ctx.channel
        return this.success("rateLimitPerUser" in chan ? chan.rateLimitPerUser : 0)
    },
})
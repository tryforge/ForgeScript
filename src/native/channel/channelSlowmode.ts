import { BaseChannel, TextChannel } from "discord.js"
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
            check: (i: BaseChannel) => i.isTextBased()
        },
    ],
    execute(ctx, [ch]) {
        const channel = (ch ?? ctx.channel) as TextChannel | undefined

        return this.successJSON(channel?.rateLimitPerUser)
    },
})
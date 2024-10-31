import { BaseChannel, TextBasedChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$firstMessageID",
    version: "1.5.0",
    description: "Returns the first message sent in a channel",
    brackets: false,
    aliases: [
        "$channelFirstMessageID"
    ],
    unwrap: true,
    output: ArgType.Message,
    args: [
        {
            name: "channel ID",
            description: "The channel to pull first message from",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => "messages" in i
        },
    ],
    async execute(ctx, [ channel ]) {
        channel ??= ctx.channel!
        const message = await (channel as TextBasedChannel)?.messages.fetch({ after: "0", limit: 1 }).catch(ctx.noop)
        return this.success(message ? message.firstKey() : null)
    },
})
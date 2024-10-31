import { BaseChannel, TextBasedChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"
import array from "../../functions/array"

export default new NativeFunction({
    name: "$channelPinnedMessages",
    version: "1.5.0",
    description: "Returns the pinned messages of a channel",
    brackets: false,
    aliases: [
        "$pinnedMessages"
    ],
    unwrap: true,
    output: array<ArgType.Message>(),
    args: [
        {
            name: "channel ID",
            description: "The channel to pull pinned messages from",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => "messages" in i
        },
        {
            name: "separator",
            description: "The separator to use for every message id",
            rest: false,
            type: ArgType.String
        },
    ],
    async execute(ctx, [ channel, sep ]) {
        channel ??= ctx.channel!
        const messages = await (channel as TextBasedChannel)?.messages.fetchPinned().catch(ctx.noop)
        return this.success(messages ? messages.map(msg => msg.id).join(sep ?? ", ") : null)
    },
})
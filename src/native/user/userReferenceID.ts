import { BaseChannel, MessageResolvable, TextBasedChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$userReferenceID",
    version: "1.5.0",
    description: "Returns the id of the user this message replies to",
    unwrap: true,
    output: ArgType.User,
    args: [
        {
            name: "channel ID",
            rest: false,
            required: true,
            description: "The channel to get the message from",
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isTextBased()
        },
        {
            name: "message ID",
            description: "The message to get its reference user",
            rest: false,
            type: ArgType.Message,
            pointer: 0,
            required: true,
        },
    ],
    brackets: false,
    async execute(ctx, [channel, message]) {
        channel ??= ctx.channel!
        const msg = (message ?? ctx.message).reference?.messageId
        return this.success(msg ? (await (channel as TextBasedChannel).messages.fetch(msg as MessageResolvable)).author.id : undefined)
    }
})
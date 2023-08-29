import { BaseChannel, Message } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$sendMessage",
    description: "Sends a message to a channel",
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to send this message to",
            required: true,
            type: ArgType.Channel,
            rest: false,
            check: (i: BaseChannel) => i.isTextBased()
        },
        {
            name: "content",
            description: "The content for the message",
            type: ArgType.String,
            rest: false
        },
        {
            name: "return message ID",
            description: "Whether to return the message id of the newly sent message",
            rest: false,
            type: ArgType.Boolean
        }
    ],
    brackets: true,
    async execute(ctx, [ channel, content, returnMessageID ]) {
        ctx.container.content = content ?? undefined
        const msg = await ctx.container.send<Message<true>>(channel)
        return Return.success(returnMessageID ? msg?.id : undefined)
    },
})
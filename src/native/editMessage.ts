import { BaseChannel, Message } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$editMessage",
    version: "1.0.0",
    description: "Edits a message in a channel",
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to edit this message",
            required: true,
            type: ArgType.Channel,
            rest: false,
            check: (i: BaseChannel) => i.isTextBased(),
        },
        {
            name: "message ID",
            description: "The message to edit",
            rest: false,
            type: ArgType.Message,
            pointer: 0,
            required: true,
        },
        {
            name: "content",
            description: "The content for the message",
            type: ArgType.String,
            rest: false,
        },
    ],
    brackets: true,
    async execute(ctx, [, opt, content]) {
        ctx.container.content = content || undefined
        ctx.container.edit = true
        const msg = await ctx.container.send<Message<true>>(opt)
        return Return.success(!!msg)
    },
})

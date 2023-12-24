import { Message } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$interactionReply",
    category: "unknown",
    version: "1.0.0",
    description: "Forces an interaction reply",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "content",
            description: "The content to use for this response",
            required: true,
            type: ArgType.String,
            rest: false,
        },
        {
            name: "return message ID",
            description: "Whether to fetch and return the message id of the reply",
            rest: false,
            type: ArgType.Boolean,
            required: false,
        },
    ],
    async execute(ctx, [content, returnMessageID]) {
        ctx.container.fetchReply = returnMessageID ?? false
        ctx.container.content = content || undefined

        if (!this.hasFields) {
            await ctx.container.send(ctx.obj)
            return this.success()
        }

        const reply = await ctx.container.send<Message<true>>(ctx.obj)

        return this.success(returnMessageID ? reply?.id : undefined)
    },
})

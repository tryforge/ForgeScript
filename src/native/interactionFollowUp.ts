import { Message } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$interactionFollowUp",
    description: "Forces an interaction follow up",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "content",
            description: "The content to use for this follow up",
            required: true,
            type: ArgType.String,
            rest: false,
        },
        {
            name: "return message ID",
            description: "Whether to fetch and return the message id of the follow up",
            rest: false,
            type: ArgType.Boolean,
            required: false,
        },
    ],
    async execute(ctx, [content, returnMessageID]) {
        ctx.container.fetchReply = returnMessageID ?? false
        ctx.container.followUp = true
        ctx.container.content = content || undefined

        if (!this.hasFields) {
            await ctx.container.send(ctx.obj)
            return Return.success()
        }

        const reply = await ctx.container.send<Message<true>>(ctx.obj)

        return Return.success(returnMessageID ? reply?.id : undefined)
    },
})

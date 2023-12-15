import { Message } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$sendDM",
    version: "1.0.0",
    description: "Sends a DM to a user",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "user ID",
            description: "The user to DM",
            rest: false,
            type: ArgType.User,
            required: true,
        },
        {
            name: "content",
            description: "The content to send",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "return message ID",
            description: "Returns the message id of the newly created message",
            rest: false,
            type: ArgType.Boolean,
        },
    ],
    async execute(ctx, [user, content, returnMessageID]) {
        ctx.container.content = content || undefined
        const msg = await ctx.container.send<Message<true>>(user)
        return this.success(returnMessageID ? msg?.id : undefined)
    },
})

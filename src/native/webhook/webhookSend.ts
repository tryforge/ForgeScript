import { Message, WebhookClient } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$webhookSend",
    version: "1.0.0",
    description: "Sends a message with a webhook",
    brackets: true,
    unwrap: true,
    output: ArgType.Message,
    args: [
        {
            name: "url",
            description: "The webhook url",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "content",
            description: "The content for the message",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "return message ID",
            description: "Return the message id of the sent message",
            rest: false,
            type: ArgType.Boolean,
        },
        {
            name: "username",
            description: "The username for the message",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "avatar",
            description: "The avatar for the message",
            rest: false,
            type: ArgType.String,
        },
    ],
    async execute(ctx, [url, content, returnMessageID, username, avatarUrl]) {
        const web = new WebhookClient({ url })

        ctx.container.content = content || undefined
        ctx.container.avatarURL = avatarUrl ?? undefined
        ctx.container.username = username ?? undefined

        const m = await ctx.container.send<Message>(web)
        return this.success(returnMessageID && m ? m.id : undefined)
    },
})

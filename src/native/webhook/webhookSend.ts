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
    ],
    async execute(ctx, [url, content, returnMessageID]) {
        const web = new WebhookClient({ url })

        ctx.container.content = content || undefined
        const m = await ctx.container.send<Message>(web)
        return this.success(returnMessageID && m ? m.id : undefined)
    },
})

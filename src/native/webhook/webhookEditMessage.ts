import { Message, WebhookClient } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$webhookEditMessage",
    version: "1.5.0",
    description: "Edits a webhook message, returns bool",
    brackets: true,
    unwrap: true,
    output: ArgType.Boolean,
    args: [
        {
            name: "url",
            description: "The webhook url",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "message ID",
            description: "The message to edit",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "content",
            description: "The new content for the message",
            rest: false,
            type: ArgType.String,
        }
    ],
    async execute(ctx, [ url, msg, content ]) {
        const web = new WebhookClient({ url })

        ctx.container.content = content || undefined
        ctx.container.edit = true

        return this.success(!!(await ctx.container.send<Message>(web, undefined, msg)))
    },
})
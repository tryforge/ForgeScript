import { WebhookClient } from "discord.js"
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
            required: true,
            type: ArgType.String,
        }
    ],
    async execute(ctx, [ url, msg, content ]) {
        const webhook = new WebhookClient({ url })
        const edit = await webhook.editMessage(msg, content).catch(ctx.noop)

        return this.success(!!edit)
    },
})
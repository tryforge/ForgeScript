import { WebhookType } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$webhookType",
    version: "2.3.0",
    description: "Returns the type of a webhook",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "id",
            description: "The webhook id",
            rest: false,
            type: ArgType.Webhook,
            required: true,
        },
    ],
    output: WebhookType,
    async execute(ctx, [web]) {
        return this.success(WebhookType[web.type])
    },
})
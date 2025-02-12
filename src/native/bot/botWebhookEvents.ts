import { ApplicationWebhookEventType } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"
import array from "../../functions/array"

export default new NativeFunction({
    name: "$botWebhookEvents",
    version: "2.2.0",
    description: "Returns the client webhook event types",
    aliases: ["$clientWebhookEvents"],
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "separator",
            description: "The separator to use for every type",
            rest: false,
            type: ArgType.String,
        },
    ],
    output: array(ApplicationWebhookEventType),
    execute(ctx, [sep]) {
        return this.success(ctx.client.application.eventWebhooksTypes?.join(sep ?? ", "))
    },
})
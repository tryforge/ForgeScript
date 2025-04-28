import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$botWebhookURL",
    version: "2.2.0",
    description: "Returns the client webhook event url",
    unwrap: false,
    aliases: ["$clientWebhookURL"],
    output: ArgType.URL,
    execute(ctx) {
        return this.success(ctx.client.application.eventWebhooksURL)
    },
})
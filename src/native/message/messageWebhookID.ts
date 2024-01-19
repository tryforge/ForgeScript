import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$messageWebhookID",
    version: "1.1.0",
    description: "Returns the message's webhook id",
    unwrap: false,
    output: ArgType.Webhook,
    execute(ctx) {
        return this.success(ctx.message?.webhookId)
    },
})

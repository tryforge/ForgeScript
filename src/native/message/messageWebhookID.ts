import { NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$messageWebhookID",
    category: "message",
    version: "1.1.0",
    description: "Returns the message's webhook id",
    unwrap: false,
    execute(ctx) {
        return this.success(ctx.message?.webhookId)
    },
})

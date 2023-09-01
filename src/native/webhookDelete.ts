import { BaseChannel, TextChannel, WebhookClient } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"
import noop from "../functions/noop"

export default new NativeFunction({
    name: "$webhookDelete",
    description: "Deletes webhook with given id",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "id",
            description: "The webhook id",
            rest: false,
            type: ArgType.Webhook,
            required: true
        }
    ],
    async execute(ctx, [ web ]) {
        await web.delete().catch(noop)
        return Return.success()
    },
})
import { BaseChannel, TextChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$messageWebhookID",
    version: "1.1.0",
    description: "Returns the message's webhook id",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "channel ID",
            rest: false,
            required: true,
            description: "The channel to pull message from",
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isTextBased(),
        },
        {
            name: "message ID",
            pointer: 0,
            description: "The message to get its webhook id",
            rest: false,
            required: true,
            type: ArgType.Message,
        }
    ],
    output: ArgType.Webhook,
    async execute(ctx, [chan, msg]) {
        const channel = (chan ?? ctx.channel) as TextChannel
        const message = await channel.messages.fetch(msg)

        return this.success(message.webhookId)
    },
})
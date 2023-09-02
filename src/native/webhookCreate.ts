import { BaseChannel, TextChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"
import noop from "../functions/noop"

export default new NativeFunction({
    name: "$webhookCreate",
    version: "1.0.0",
    description: "Creates a webhook in a channel, returns the webhook id",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to create the webhook",
            type: ArgType.Channel,
            rest: false,
            required: true,
            check: (i: BaseChannel) => "createWebhook" in i
        },
        {
            name: "name",
            description: "The webhook name",
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: "url",
            description: "The avatar url",
            rest: false,
            type: ArgType.String
        }
    ],
    async execute(ctx, [ channel, name, url ]) {
        const ch = channel as TextChannel
        const web = await ch.createWebhook({
            name: name,
            avatar: url || undefined
        }).catch(noop)

        return Return.success(
            web ? web.id : undefined
        )
    },
})
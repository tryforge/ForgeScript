import { BaseChannel, BaseGuildTextChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"
import array from "../../functions/array"
import { WebhookProperties, WebhookProperty } from "../../properties/webhook"

export default new NativeFunction({
    name: "$channelWebhooks",
    version: "2.3.0",
    description: "Returns all webhooks of a channel",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to get its webhooks",
            rest: false,
            type: ArgType.Channel,
            required: true,
            check: (i: BaseChannel) => i.isTextBased(),
        },
        {
            name: "property",
            description: "The property to return",
            rest: false,
            type: ArgType.Enum,
            enum: WebhookProperty
        },
        {
            name: "separator",
            description: "The separator to use for every property",
            rest: false,
            type: ArgType.String,
        },
    ],
    output: array<ArgType.Unknown>(),
    async execute(ctx, [channel, prop, sep]) {
        const webhooks = await ((channel ?? ctx.channel) as BaseGuildTextChannel)?.fetchWebhooks().catch(ctx.noop)
        if (prop && webhooks) return this.success(webhooks.map((x) => WebhookProperties[prop](x)).join(sep ?? ", "))
        return this.successJSON(webhooks)
    },
})
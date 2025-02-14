import { ArgType, NativeFunction, Return } from "../../structures"
import array from "../../functions/array"
import { WebhookProperties, WebhookProperty } from "../../properties/webhook"

export default new NativeFunction({
    name: "$guildWebhooks",
    version: "2.3.0",
    description: "Returns all webhooks of a guild",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to retrieve the data",
            rest: false,
            type: ArgType.Guild,
            required: true,
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
    async execute(ctx, [guild, prop, sep]) {
        const webhooks = await (guild ?? ctx.guild)?.fetchWebhooks().catch(ctx.noop)
        if (prop && webhooks) return this.success(webhooks.map((x) => WebhookProperties[prop](x)).join(sep ?? ", "))
        return this.successJSON(webhooks)
    },
})
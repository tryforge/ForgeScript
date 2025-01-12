import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$webhookExists",
    version: "1.0.0",
    description: "Checks whether given webhook id eixsts",
    brackets: true,
    unwrap: true,
    output: ArgType.Boolean,
    args: [
        {
            name: "id",
            description: "The webhook id",
            rest: false,
            type: ArgType.String,
            required: true,
        },
    ],
    async execute(ctx, [id]) {
        return this.success((await ctx.client.fetchWebhook(id).catch(() => false)) !== false)
    },
})
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$webhookToken",
    version: "1.0.0",
    description: "Gets webhook token of given id",
    brackets: true,
    output: ArgType.String,
    unwrap: true,
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
        const web = await ctx.client.fetchWebhook(id).catch(ctx.noop)
        return this.success(web ? web.token : web)
    },
})

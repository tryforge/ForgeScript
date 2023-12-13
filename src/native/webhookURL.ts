import { ArgType, NativeFunction, Return } from "../structures"
import noop from "../functions/noop"

export default new NativeFunction({
    name: "$webhookURL",
    version: "1.0.0",
    description: "Gets webhook url with given id",
    brackets: true,
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
        const web = await ctx.client.fetchWebhook(id).catch(noop)
        return this.success(web ? web.url : web)
    },
})

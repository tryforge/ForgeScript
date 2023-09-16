import noop from "../functions/noop"
import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$botOwnerID",
    version: "1.0.0",
    description: "Returns the bot owner id",
    unwrap: true,
    async execute(ctx) {
        if (!ctx.client.application.owner) await ctx.client.application.fetch().catch(noop)

        return Return.success(ctx.client.application.owner?.id)
    },
})

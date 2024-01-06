import noop from "../../functions/noop"
import { NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$deleteCommand",
    version: "1.2.0",
    description: "Deletes the author's message",
    unwrap: false,
    async execute(ctx) {
        await ctx.message?.delete().catch(noop)
        return this.success()
    },
})
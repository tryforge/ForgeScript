import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$autocomplete",
    version: "1.0.6",
    description: "Forces autocomplete response",
    unwrap: false,
    async execute(ctx) {
        await ctx.container.send(ctx.obj)
        return Return.success()
    },
})
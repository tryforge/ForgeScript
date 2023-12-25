import { NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$deferUpdate",
    category: "interaction",
    version: "1.3.0",
    description: "Defers this interaction as an update",
    unwrap: false,
    async execute(ctx) {
        if (ctx.interaction && "deferUpdate" in ctx.interaction) {
            await ctx.interaction.deferUpdate()
        }
        return this.success()
    },
})

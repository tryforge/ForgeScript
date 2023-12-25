import { NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$defer",
    category: "interaction",
    version: "1.0.0",
    description: "Defers this interaction",
    unwrap: false,
    async execute(ctx) {
        if (ctx.interaction && ctx.interaction.isRepliable()) {
            await ctx.interaction.deferReply({
                ephemeral: ctx.container.ephemeral,
            })
        }
        return this.success()
    },
})

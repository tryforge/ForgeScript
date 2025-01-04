import { MessageFlags } from "discord.js"
import { NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$defer",
    version: "1.0.0",
    description: "Defers this interaction",
    unwrap: false,
    async execute(ctx) {
        if (ctx.interaction && ctx.interaction.isRepliable()) {
            await ctx.interaction.deferReply({
                flags: ctx.container.ephemeral ? MessageFlags.Ephemeral : undefined
            })
        }
        return this.success()
    },
})

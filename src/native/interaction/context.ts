import { InteractionContextType } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$context",
    version: "1.5.0",
    description: "Returns the context of this interaction",
    aliases: ["$interactionContext"],
    unwrap: false,
    output: InteractionContextType,
    execute(ctx) {
        return this.success(ctx.interaction && "context" in ctx.interaction ? InteractionContextType[ctx.interaction.context!] : undefined)
    },
})
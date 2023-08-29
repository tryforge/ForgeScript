import { ArgType, NativeFunction } from "../structures/NativeFunction"
import { Return, ReturnType } from "../structures/Return"

export default new NativeFunction({
    name: "$customID",
    description: "Retrieves the custom id of the interaction.",
    unwrap: true,
    execute: async function(ctx) {
        return Return.success(ctx.interaction && "customId" in ctx.interaction ? ctx.interaction.customId : undefined)
    }
})
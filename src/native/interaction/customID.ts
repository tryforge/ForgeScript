import { NativeFunction } from "../../structures/@internal/NativeFunction"
import { Return } from "../../structures/@internal/Return"

export default new NativeFunction({
    name: "$customID",
    category: "interaction",
    version: "1.0.0",
    description: "Retrieves the custom id of the interaction",
    unwrap: true,
    execute: async function (ctx) {
        return this.success(ctx.interaction && "customId" in ctx.interaction ? ctx.interaction.customId : undefined)
    },
})

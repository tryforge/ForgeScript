import { NativeFunction } from "../../structures/@internal/NativeFunction"
import { Return } from "../../structures/@internal/Return"

export default new NativeFunction({
    name: "$locale",
    version: "1.4.0",
    description: "Retrieves the user locale of the interaction",
    unwrap: true,
    execute: async function (ctx) {
        return this.success(ctx.interaction?.locale)
    },
})

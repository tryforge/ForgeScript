import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$isAutocomplete",
    category: "unknown",
    version: "1.0.6",
    description: "Whether the interaction is autocomplete",
    unwrap: false,
    execute(ctx) {
        return this.success(Boolean(ctx.interaction?.isAutocomplete()))
    },
})

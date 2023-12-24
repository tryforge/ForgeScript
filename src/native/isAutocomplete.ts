import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$isAutocomplete",
    version: "1.0.6",
    description: "Returns whether the interaction is autocomplete",
    unwrap: false,
    execute(ctx) {
        return this.success(Boolean(ctx.interaction?.isAutocomplete()))
    },
})

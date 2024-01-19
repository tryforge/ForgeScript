import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$isAutocomplete",
    version: "1.0.6",
    description: "Whether the interaction is autocomplete",
    unwrap: false,
    output: ArgType.Boolean,
    execute(ctx) {
        return this.success(Boolean(ctx.interaction?.isAutocomplete()))
    },
})

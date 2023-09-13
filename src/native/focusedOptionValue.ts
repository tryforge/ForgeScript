import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$focusedOptionValue",
    version: "1.0.6",
    description: "Returns the focused option value of the command",
    unwrap: false,
    execute(ctx) {
        return Return.success(ctx.interaction?.isAutocomplete() ? ctx.interaction.options.getFocused(true).value : undefined)
    },
})
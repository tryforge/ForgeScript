import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$focusedOptionValue",
    version: "1.0.6",
    description: "Returns the focused option value of the command",
    unwrap: false,
    output: ArgType.Unknown,
    execute(ctx) {
        return this.success(
            ctx.interaction?.isAutocomplete() ? ctx.interaction.options.getFocused(true).value : undefined
        )
    },
})

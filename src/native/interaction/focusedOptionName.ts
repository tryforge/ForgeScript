import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$focusedOptionName",
    version: "1.0.6",
    description: "Returns the focused option of the command",
    unwrap: false,
    output: ArgType.String,
    execute(ctx) {
        return this.success(
            ctx.interaction?.isAutocomplete() ? ctx.interaction.options.getFocused(true).name : undefined
        )
    },
})

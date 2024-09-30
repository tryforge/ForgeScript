import noop from "../../functions/noop"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$applicationSubCommandName",
    version: "1.5.0",
    description: "Returns the application sub command name of this interaction",
    unwrap: false,
    output: ArgType.String,
    execute(ctx) {
        return this.success(ctx.interaction && "options" in ctx.interaction && "getSubcommand" in ctx.interaction.options ? ctx.interaction.options.getSubcommand(false) : undefined)
    },
})
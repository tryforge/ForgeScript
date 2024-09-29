import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$option",
    version: "1.0.6",
    description: "Returns an option value with given name (interaction command)",
    brackets: true,
    unwrap: true,
    output: ArgType.Unknown,
    args: [
        {
            name: "option name",
            description: "The option name to retrieve its value",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    execute(ctx, [name]) {
        const data = ctx.interaction && "options" in ctx.interaction ? ctx.interaction.options.get(name) : null
        return this.success(data?.attachment?.url ?? data?.value)
    },
})

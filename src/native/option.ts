import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$option",
    version: "1.0.6",
    description: "Returns an option value with given name (interaction command)",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "option name",
            description: "The option name to retrieve its value",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    execute(ctx, [ name ]) {
        return Return.success(ctx.isCommand() ? ctx.interaction.options.get(name)?.value : null)
    },
})
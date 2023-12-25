import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$arrayLoad",
    category: "array",
    version: "1.0.0",
    description: "Loads an array to an environment variable",
    args: [
        {
            name: "variable",
            description: "The variable name to load this array to",
            required: true,
            rest: false,
            type: ArgType.String,
        },
        {
            name: "separator",
            description: "The separator to use for the array elements",
            rest: false,
            type: ArgType.String,
            required: true,
        },
        {
            name: "values",
            description: "The elements of the array",
            required: true,
            rest: true,
            type: ArgType.String,
        },
    ],
    unwrap: true,
    brackets: true,
    execute(ctx, [name, sep, values]) {
        ctx.setEnvironmentKey(name, values.join(";").split(sep))
        return this.success()
    },
})

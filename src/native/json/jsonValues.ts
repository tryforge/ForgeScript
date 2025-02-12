import array from "../../functions/array"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$jsonValues",
    version: "1.4.0",
    description: "Gets values from a json var",
    brackets: true,
    args: [
        {
            name: "variable",
            description: "The variable to get values from",
            rest: false,
            type: ArgType.String,
            required: true,
        },
        {
            name: "separator",
            description: "The separator to use for each value",
            type: ArgType.String,
            rest: false,
        },
    ],
    output: array<ArgType.Unknown>(),
    unwrap: true,
    execute(ctx, [name, sep]) {
        const json = ctx.getEnvironmentKey(name)
        if (!json) return this.success()
        return this.successJSON(Object.values(json).join(sep ?? ", "))
    },
})
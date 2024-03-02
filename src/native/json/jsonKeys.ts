import array from "../../functions/array"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$jsonKeys",
    version: "1.4.0",
    description: "Gets keys from a json var",
    brackets: true,
    args: [
        {
            name: "variable",
            description: "The variable to get keys from",
            rest: false,
            type: ArgType.String,
            required: true,
        },
    ],
    output: array<ArgType.Unknown>(),
    unwrap: true,
    execute(ctx, [name]) {
        return this.successJSON(Object.keys(ctx.getEnvironmentKey(name) as object))
    },
})

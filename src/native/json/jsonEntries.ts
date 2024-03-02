import array from "../../functions/array"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$jsonEntries",
    version: "1.4.0",
    description: "Gets entries from a json var",
    brackets: true,
    args: [
        {
            name: "variable",
            description: "The variable to get entries from",
            rest: false,
            type: ArgType.String,
            required: true,
        }
    ],
    output: array<ArgType.Unknown>(),
    unwrap: true,
    execute(ctx, [name]) {
        return this.successJSON(Object.entries(ctx.getEnvironmentKey(name) as object))
    },
})

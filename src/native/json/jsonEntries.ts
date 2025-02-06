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
        const json = ctx.getEnvironmentKey(name)
        if (!json) return this.success()
        return this.successJSON(Object.entries(json))
    },
})
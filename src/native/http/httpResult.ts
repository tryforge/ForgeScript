import array from "../../functions/array"
import { ArgType, NativeFunction } from "../../structures/@internal/NativeFunction"
import { Return } from "../../structures/@internal/Return"

export default new NativeFunction({
    name: "$httpResult",
    version: "1.2.0",
    description: "Retrieve an http result value",
    output: array<ArgType.Json | ArgType.String>(),
    args: [
        {
            name: "key",
            description: "The key to return its value",
            required: true,
            type: ArgType.String,
            rest: true
        },
    ],
    brackets: false,
    unwrap: true,
    execute(ctx, [args]) {
        if (!this.hasFields)
            return this.successJSON(ctx.getEnvironmentKey("result"))
        const env = ctx.getEnvironmentKey("result", ...args)
        return this.successJSON(env)
    },
})

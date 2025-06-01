import { ArgType, NativeFunction } from "../../structures/@internal/NativeFunction"

export default new NativeFunction({
    name: "$httpResult",
    version: "1.2.0",
    description: "Retrieve an http result value",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "key",
            description: "The key to return its value",
            required: true,
            type: ArgType.String,
            rest: true
        },
    ],
    output: [
        ArgType.Json,
        ArgType.Unknown
    ],
    execute(ctx, [args]) {
        if (!this.hasFields)
            return this.successJSON(ctx.getEnvironmentKey("result"))
        const env = ctx.getEnvironmentKey("result", ...args)
        return this.successJSON(env)
    },
})

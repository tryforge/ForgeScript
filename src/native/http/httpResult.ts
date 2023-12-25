import { ArgType, NativeFunction } from "../../structures/@internal/NativeFunction"
import { Return } from "../../structures/@internal/Return"

export default new NativeFunction({
    name: "$httpResult",
    category: "http",
    version: "1.2.0",
    description: "Retrieve an http result value",
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
        const env = ctx.getEnvironmentKey("result", ...args)
        return this.successJSON(env)
    },
})

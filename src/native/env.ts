import { ArgType, NativeFunction } from "../structures/NativeFunction"
import { Return } from "../structures/Return"

export default new NativeFunction({
    name: "$env",
    version: "1.0.0",
    description: "Retrieve an environment value",
    args: [
        {
            name: "key",
            description: "The key to return its value",
            required: true,
            type: ArgType.String,
            rest: true
        }
    ],
    brackets: true,
    unwrap: true,
    execute(ctx, [ args ]) {
        const env = ctx.getEnvironmentKey(args)
        return Return.successJSON(env)
    },
})
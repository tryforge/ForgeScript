import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$async",
    category: "unknown",
    version: "1.0.0",
    description: "Runs code asynchronously, will not return any value",
    unwrap: false,
    brackets: true,
    args: [
        {
            name: "code",
            description: "The code to execute",
            rest: false,
            type: ArgType.String,
            required: true,
        },
    ],
    experimental: true,
    execute(ctx) {
        void this["resolveArgs"](ctx)
        return this.success()
    },
})

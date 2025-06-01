import { ArgType, NativeFunction } from "../../structures/@internal/NativeFunction"

export default new NativeFunction({
    name: "$function",
    version: "1.0.0",
    description: "Runs a function",
    unwrap: false,
    experimental: true,
    output: ArgType.Unknown,
    args: [
        {
            name: "code",
            description: "Code to execute",
            required: true,
            type: ArgType.String,
            rest: true,
        },
    ],
    brackets: true,
    execute: async function (ctx) {
        const rt = await this["resolveArgs"](ctx)
        if (rt.return) return this.success(rt.value)
        else if (rt.success) return this.success()
        return rt
    },
})

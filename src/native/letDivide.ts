import { ArgType, NativeFunction } from "../structures"

export default new NativeFunction({
    name: "$letDivide",
    category: "unknown",
    version: "1.3.0",
    description: "Short-hand for $let[...;$divide[$get[...];...]]",
    unwrap: true,
    args: [
        {
            name: "key",
            description: "The key name",
            rest: false,
            type: ArgType.String,
            required: true,
        },
        {
            name: "value",
            description: "The value to divide with",
            rest: false,
            required: true,
            type: ArgType.Number,
        },
    ],
    brackets: true,
    execute(ctx, [ key, value ]) {
        ctx.setKeyword(key, Number(ctx.getKeyword(key)) / value)
        return this.success()
    },
})
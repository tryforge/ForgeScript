import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$letSum",
    category: "variable",
    version: "1.3.0",
    description: "Short-hand for $let[...;$sum[$get[...];...]]",
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
            description: "The value to sum with",
            rest: false,
            required: true,
            type: ArgType.Number,
        },
    ],
    brackets: true,
    execute(ctx, [ key, value ]) {
        ctx.setKeyword(key, Number(ctx.getKeyword(key)) + value)
        return this.success()
    },
})
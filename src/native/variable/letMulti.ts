import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$letMulti",
    version: "1.3.0",
    description: "Short-hand for $let[...;$multi[$get[...];...]]",
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
            description: "The value to multiply with",
            rest: false,
            required: true,
            type: ArgType.Number,
        },
    ],
    brackets: true,
    execute(ctx, [ key, value ]) {
        ctx.setKeyword(key, Number(ctx.getKeyword(key)) * value)
        return this.success()
    },
})
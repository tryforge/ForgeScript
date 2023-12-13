import { ArgType, NativeFunction } from "../structures/NativeFunction"
import { Return } from "../structures/Return"

export default new NativeFunction({
    name: "$get",
    version: "1.0.0",
    description: "Get a keyword value",
    unwrap: true,
    args: [
        {
            name: "key",
            description: "The key name",
            rest: false,
            type: ArgType.String,
            required: true,
        },
    ],
    brackets: true,
    execute(ctx, [name]) {
        return this.success(ctx.getKeyword(name))
    },
})

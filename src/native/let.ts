import { ArgType, NativeFunction } from "../structures/NativeFunction"
import { Return } from "../structures/Return"

export default new NativeFunction({
    name: "$let",
    version: "1.0.0",
    description: "Create a keyword",
    unwrap: true,
    args: [
        {
            name: "key",
            description: "The key name",
            rest: false,
            type: ArgType.String,
            required: true
        },
        {
            name: "value",
            description: "The key value",
            rest: true,
            required: true,
            type: ArgType.String
        }
    ],
    brackets: true,
    execute(ctx, [ name, args ]) {
        ctx.setKeyword(name, args.join(";"))
        return Return.success()
    },
})
import { ArgType, NativeFunction } from "../structures/@internal/NativeFunction"
import { Return } from "../structures/@internal/Return"

export default new NativeFunction({
    name: "$message",
    category: "unknown",
    version: "1.0.0",
    description: "Retrieves arguments from a message command",
    args: [
        {
            name: "index",
            description: "Index to get arg",
            type: ArgType.Number,
            required: true,
            rest: false,
        },
        {
            name: "end index",
            description: "The end index",
            rest: false,
            type: ArgType.Number,
        },
    ],
    brackets: false,
    unwrap: true,
    execute(ctx, [index, end]) {
        if (this.hasFields) {
            return this.success(end ? ctx.args.slice(index, end).join(" ") : ctx.args[index])
        }
        return this.success(ctx.args.join(" "))
    },
})

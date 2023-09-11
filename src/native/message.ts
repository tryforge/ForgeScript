import { ArgType, NativeFunction } from "../structures/NativeFunction"
import { Return } from "../structures/Return"

export default new NativeFunction({
    name: "$message",
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
            type: ArgType.Number
        }
    ],
    brackets: false,
    unwrap: true,
    execute(ctx, [ index, end ]) {
        if (this.hasFields) {
            return Return.success(end ? ctx.args.slice(index, end) : ctx.args[index])
        }
        return Return.success(ctx.args.join(" "))
    },
})
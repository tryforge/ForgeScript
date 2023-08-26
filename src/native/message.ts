import { ArgType, NativeFunction } from "../structures/NativeFunction"
import { Return } from "../structures/Return"

export default new NativeFunction({
    name: "$message",
    description: "Retrieves arguments from a message command",
    args: [
        {
            name: "index",
            description: "Index to get arg",
            type: ArgType.Number,
            required: true,
            rest: false,
        }
    ],
    brackets: false,
    unwrap: true,
    execute(ctx, [ index ]) {
        if (this.hasFields) {
            return Return.success(ctx.args[index - 1])   
        }
        return Return.success(ctx.args.join(" "))
    },
})
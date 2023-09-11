import { ArgType, NativeFunction } from "../structures"
import { Return } from "../structures/Return"

const NoMentionRegex = /<(@|#)(&|!)?(\d{16,23})>/g

export default new NativeFunction({
    name: "$noMentionMessage",
    version: "1.0.0",
    description: "Retrieves arguments from a message without mentions",
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
        const msg = ctx.args.join(" ").replace(NoMentionRegex, "").trim().split(/ +/)

        if (this.hasFields) {
            return Return.success(end ? msg.slice(index, end) : msg[index ])
        }
        return Return.success(msg.join(" "))
    },
})
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$charCodeAt",
    version: "1.0.6",
    description: "Returns the char code at given index",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "message",
            description: "The string to get char code of",
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: "index",
            description: "The index to get its char code",
            type: ArgType.Number,
            rest: false,
            required: true
        }
    ],
    execute(ctx, [ m, index ]) {
        return Return.success(m.charCodeAt(index))
    },
})
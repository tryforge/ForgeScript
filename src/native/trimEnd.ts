import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$trimEnd",
    version: "1.0.6",
    description: "Trims at the end of a string",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "message",
            description: "The string to trim at the end",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    execute(ctx, [ m ]) {
        return Return.success(m.trimEnd())
    },
})
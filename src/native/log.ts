import { ArgType, NativeFunction } from "../structures/NativeFunction"
import { Return } from "../structures/Return"

export default new NativeFunction({
    name: "$log",
    version: "1.0.0",
    description: "Log something to console",
    unwrap: true,
    args: [
        {
            name: "message",
            description: "The message to log to console",
            rest: true,
            type: ArgType.String,
            required: true,
        },
    ],
    brackets: true,
    execute(_, [args]) {
        console.log(...args)
        return Return.success()
    },
})

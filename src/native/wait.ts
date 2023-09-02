import { setTimeout } from "timers/promises"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$wait",
    version: "1.0.0",
    description: "Delays the code below for x milliseconds",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "ms",
            description: "The ms to wait for",
            rest: false,
            type: ArgType.Number,
            required: true
        }
    ],
    async execute(ctx, [ ms ]) {
        await setTimeout(ms)
        return Return.success()
    },
})
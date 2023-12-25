import { setTimeout } from "timers/promises"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$wait",
    category: "time",
    version: "1.0.0",
    description: "Delays the code below for x milliseconds",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "duration",
            description: "The duration to wait for",
            rest: false,
            type: ArgType.Time,
            required: true,
        },
    ],
    async execute(_, [ms]) {
        await setTimeout(ms)
        return this.success()
    },
})

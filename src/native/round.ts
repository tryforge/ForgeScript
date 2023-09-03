import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$round",
    version: "1.0.0",
    description: "Returns a supplied numeric expression rounded to the nearest integer",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "number",
            description: "The number to use",
            rest: false,
            type: ArgType.Number,
            required: true
        }
    ],
    execute(ctx, [ n ]) {
        return Return.success(Math.round(n))
    },
})
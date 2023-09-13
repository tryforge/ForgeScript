import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$inRange",
    version: "1.0.0",
    description: "Whether a number is in range",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "number",
            description: "The number to validate",
            rest: false,
            type: ArgType.Number,
            required: true
        },
        {
            name: "min",
            description: "The min value",
            rest: false,
            type: ArgType.Number
        },
        {
            name: "max",
            description: "The max value",
            rest: false,
            type: ArgType.Number
        }
    ],
    execute(ctx, [ n, min, max ]) {
        return Return.success(
            min !== null && max !== null ?
                n >= min && n <= max :
                min !== null ?
                    n >= min :
                    max !== null ?
                        n <= max :
                        true
        )
    },
})
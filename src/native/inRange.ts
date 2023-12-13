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
            required: true,
        },
        {
            name: "min",
            description: "The min value",
            rest: false,
            type: ArgType.Number,
        },
        {
            name: "max",
            description: "The max value",
            rest: false,
            type: ArgType.Number,
        },
    ],
    execute(_, [n, min, max]) {
        return this.success(min === null || max === null ? false : Math.max(min, n) === Math.min(max, n))
    },
})

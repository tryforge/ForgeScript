import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$modulo",
    description: "Returns the remainder of multiple numbers",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "numbers",
            description: "Numbers to get their remainders",
            rest: true,
            type: ArgType.Number,
            required: true
        }
    ],
    execute(ctx, [ numbers ]) {
        return Return.success(numbers.reduce((x, y) => x % y))
    },
})
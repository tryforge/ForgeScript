import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$multi",
    description: "Multiplies multiple numbers",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "numbers",
            description: "Numbers to multiply",
            rest: true,
            type: ArgType.Number,
            required: true
        }
    ],
    execute(ctx, [ numbers ]) {
        return Return.success(numbers.reduce((x, y) => x * y))
    },
})
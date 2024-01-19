import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$modulo",
    version: "1.0.0",
    description: "Returns the remainder of multiple numbers",
    brackets: true,
    unwrap: true,
    output: ArgType.Number,
    args: [
        {
            name: "numbers",
            description: "Numbers to get their remainders",
            rest: true,
            type: ArgType.Number,
            required: true,
        },
    ],
    execute(ctx, [numbers]) {
        return this.success(numbers.reduce((x, y) => x % y))
    },
})

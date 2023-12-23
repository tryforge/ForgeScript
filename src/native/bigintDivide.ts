import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$bigintDivide",
    version: "1.3.0",
    description: "Divides multiple numbers",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "numbers",
            description: "Numbers to divide",
            rest: true,
            type: ArgType.BigInt,
            required: true,
        },
    ],
    execute(_, [numbers]) {
        return this.success(numbers.reduce((x, y) => x / y))
    },
})

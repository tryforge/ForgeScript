import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$bigintSub",
    category: "number",
    version: "1.3.0",
    description: "Subtracts multiple numbers",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "numbers",
            description: "Numbers to sub",
            rest: true,
            type: ArgType.BigInt,
            required: true,
        },
    ],
    execute(_, [numbers]) {
        return this.success(numbers.reduce((x, y) => x - y))
    },
})

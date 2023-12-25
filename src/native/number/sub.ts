import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$sub",
    category: "number",
    version: "1.0.0",
    description: "Subtracts multiple numbers",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "numbers",
            description: "Numbers to sub",
            rest: true,
            type: ArgType.Number,
            required: true,
        },
    ],
    execute(_, [numbers]) {
        return this.success(numbers.reduce((x, y) => x - y))
    },
})

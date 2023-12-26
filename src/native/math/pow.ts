import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$pow",
    category: "math",
    version: "1.0.0",
    description: "Exponentially multiply multiple numbers",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "numbers",
            description: "Numbers to power by",
            rest: true,
            type: ArgType.Number,
            required: true,
        },
    ],
    execute(ctx, [numbers]) {
        return this.success(numbers.reduce((x, y) => x ** y))
    },
})

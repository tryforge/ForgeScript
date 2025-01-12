import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$sign",
    version: "2.2.0",
    description: "Returns the sign of the x, indicating whether x is positive, negative or zero",
    brackets: true,
    unwrap: true,
    output: ArgType.Number,
    args: [
        {
            name: "number",
            description: "The number to use",
            rest: false,
            type: ArgType.Number,
            required: true
        },
    ],
    execute(ctx, [n]) {
        return this.success(Math.sign(n))
    },
})
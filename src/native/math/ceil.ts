import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$ceil",
    version: "1.5.0",
    description: "Returns the smallest integer greater than or equal to its numeric argument",
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
        return this.success(Math.ceil(n))
    },
})
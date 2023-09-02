import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$sqrt",
    version: "1.0.0",
    description: "Returns the square root of a number.",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "number",
            description: "The number to use",
            rest: false,
            type: ArgType.Number,
            required: true
        }
    ],
    execute(ctx, [ n ]) {
        return Return.success(Math.sqrt(n))
    },
})
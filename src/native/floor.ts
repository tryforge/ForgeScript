import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$floor",
    version: "1.0.0",
    description: "Returns the greatest integer less than or equal to its numeric argument",
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
        return Return.success(Math.floor(n))
    },
})
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$arrayLength",
    category: "unknown",
    version: "1.0.0",
    description: "Returns the numbers of elements in an array",
    unwrap: true,
    args: [
        {
            name: "name",
            description: "The variable that holds the array",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    brackets: true,
    execute(ctx, args) {
        const arr = ctx.getEnvironmentKey(...args)
        return this.success(Array.isArray(arr) ? arr.length : 0)
    },
})

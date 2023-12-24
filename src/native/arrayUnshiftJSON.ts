import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$arrayUnshiftJSON",
    category: "unknown",
    version: "1.3.0",
    description: "Adds elements to the beginning of an array",
    unwrap: true,
    args: [
        {
            name: "name",
            description: "The variable that holds the array",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "values",
            description: "The values to append at the start of the array",
            rest: true,
            required: true,
            type: ArgType.Json,
        },
    ],
    brackets: true,
    execute(ctx, [name, values]) {
        const arr = ctx.getEnvironmentKey(name)
        if (Array.isArray(arr)) arr.unshift(...values)
        return this.success()
    },
})

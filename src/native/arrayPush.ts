import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$arrayPush",
    category: "unknown",
    version: "1.0.0",
    description: "Appends an element to an array",
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
            description: "The values to append at the end of the array",
            rest: true,
            required: true,
            type: ArgType.String,
        },
    ],
    brackets: true,
    execute(ctx, [name, values]) {
        const arr = ctx.getEnvironmentKey(name)
        if (Array.isArray(arr)) arr.push(...values)
        return this.success()
    },
})

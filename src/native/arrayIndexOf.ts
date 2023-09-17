import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$arrayIndexOf",
    version: "1.0.0",
    description: "Gets the index of an element in the array",
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
            name: "value",
            description: "The exact value to get its index",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    brackets: true,
    execute(ctx, [name, value]) {
        const arr = ctx.getEnvironmentKey(name)
        return Return.success(Array.isArray(arr) ? arr.indexOf(value) : -1)
    },
})

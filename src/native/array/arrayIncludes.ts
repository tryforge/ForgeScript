import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$arrayIncludes",
    version: "1.0.0",
    description: "Checks whether a value exists in an array",
    unwrap: true,
    output: ArgType.Boolean,
    args: [
        {
            name: "variable",
            description: "The variable the array is held on",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "value",
            description: "The value to check for",
            rest: false,
            type: ArgType.String,
            required: true,
        },
    ],
    brackets: true,
    execute(ctx, [name, value]) {
        const arr = ctx.getEnvironmentKey(name)
        return this.success(Array.isArray(arr) ? arr.includes(value) : false)
    },
})

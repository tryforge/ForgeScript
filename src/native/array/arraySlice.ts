import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$arraySlice",
    version: "1.0.0",
    description: "Slices an array and loads it to another variable",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "variable",
            description: "The variable where the array is held",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "other variable",
            description: "The variable to load the result to, leave empty to return output",
            rest: false,
            type: ArgType.String,
            required: false,
        },
        {
            name: "start",
            description: "The start index to slice",
            rest: false,
            required: true,
            type: ArgType.Number,
        },
        {
            name: "end",
            description: "The end index to slice",
            rest: false,
            type: ArgType.Number,
        },
    ],
    output: ArgType.Json,
    execute(ctx, [var1, var2, start, end]) {
        const arr = ctx.getEnvironmentKey(var1)

        if (Array.isArray(arr)) {
            const sliced = arr.slice(start, end || undefined)
            if (var2)
                return this.success(void ctx.setEnvironmentKey(var2, sliced))
            else
                return this.successJSON(sliced)
        }

        return this.success()
    },
})

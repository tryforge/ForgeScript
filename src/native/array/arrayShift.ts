import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$arrayShift",
    version: "1.0.0",
    description: "Deletes the first element of the array and returns it",
    unwrap: true,
    output: ArgType.Unknown,
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
    execute(ctx, [name]) {
        const arr = ctx.getEnvironmentKey(name)
        if (Array.isArray(arr)) return this.successJSON(arr.shift())
        return this.success()
    },
})

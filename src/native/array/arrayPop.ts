import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$arrayPop",
    version: "1.0.0",
    description: "Deletes the last element of the array and returns it",
    unwrap: true,
    output: ArgType.Json,
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
        if (Array.isArray(arr)) return this.success(arr.pop())
        return this.success()
    },
})

import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$arrayPop",
    description: "Deletes the last element of the array and returns it",
    unwrap: true,
    args: [
        {
            name: "name",
            description: "The variable that holds the array",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    brackets: true,
    execute(ctx, [ name ]) {
        const arr = ctx.getEnvironmentKey([ name ])
        if (Array.isArray(arr)) return Return.success(arr.pop())
        return Return.success()
    },
})
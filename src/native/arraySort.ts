import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$arraySort",
    category: "unknown",
    version: "1.2.0",
    description: "Sorts given array",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "variable",
            description: "The variable the array is held on",
            type: ArgType.String,
            rest: false,
            required: true,
        }
    ],
    execute(ctx, [variable]) {
        const arr = ctx.getEnvironmentInstance(Array, variable)
        if (arr !== null) ctx.setEnvironmentKey(variable, arr.sort())
        return this.success()
    },
})

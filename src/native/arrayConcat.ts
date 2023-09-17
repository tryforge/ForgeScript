import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$arrayConcat",
    version: "1.0.0",
    description: "Concat arrays and load them into another variable",
    unwrap: true,
    args: [
        {
            name: "variable",
            description: "The variable to load the result to",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "variables",
            description: "The variable names to concat",
            rest: true,
            type: ArgType.String,
            required: true,
        },
    ],
    brackets: true,
    execute(ctx, [name, variables]) {
        const arr = new Array<unknown>()

        for (let i = 0, len = variables.length; i < len; i++) {
            const v = variables[i]
            const load = ctx.getEnvironmentKey(v)
            if (Array.isArray(load)) arr.push(...load)
        }

        ctx.setEnvironmentKey(name, arr)
        return Return.success()
    },
})

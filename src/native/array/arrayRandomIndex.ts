import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$arrayRandomIndex",
    version: "1.4.0",
    description: "Returns a random index",
    unwrap: true,
    output: ArgType.Number,
    brackets: true,
    args: [
        {
            name: "variable",
            description: "The variable the array is held on",
            type: ArgType.String,
            rest: false,
            required: true,
        },
    ],
    execute(ctx, [variable]) {
        const arr = ctx.getEnvironmentInstance(Array, variable)
        return this.successJSON(Array.isArray(arr) ? Math.floor(Math.random() * arr.length) : undefined)
    },
})

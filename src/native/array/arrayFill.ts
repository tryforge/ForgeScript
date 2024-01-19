import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$arrayFill",
    version: "1.4.0",
    brackets: true,
    description: "Fills an array with given value",
    args: [
        {
            name: "variable",
            description: "The variable to load array from",
            type: ArgType.String,
            rest: false,
            required: true
        },
        {
            name: "value",
            description: "The value to fill the array with",
            rest: false,
            required: true,
            type: ArgType.Json
        }
    ],
    unwrap: true,
    execute(ctx, [ v, n ]) {
        ctx.getEnvironmentInstance(Array, v)?.fill(n)
        return this.success()
    },
})
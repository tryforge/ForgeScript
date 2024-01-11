import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$arrayCreate",
    version: "1.4.0",
    aliases: [
        "$arrayNew",
        "$arrayInit"
    ],
    brackets: true,
    description: "Initializes an array and loads it to a variable",
    args: [
        {
            name: "variable",
            description: "The variable to load it to, accessed with $env",
            type: ArgType.String,
            rest: false,
            required: true
        },
        {
            name: "length",
            description: "The default length of the array",
            rest: false,
            required: false,
            type: ArgType.Number
        }
    ],
    unwrap: true,
    execute(ctx, [ v, n ]) {
        ctx.setEnvironmentKey(v, new Array(n))
        return this.success()
    },
})
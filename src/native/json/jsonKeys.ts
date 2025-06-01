import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$jsonKeys",
    version: "1.4.0",
    description: "Gets keys from a json var",
    brackets: true,
    args: [
        {
            name: "variable",
            description: "The variable to get keys from",
            rest: false,
            type: ArgType.String,
            required: true,
        },
    ],
    output: ArgType.Json,
    unwrap: true,
    execute(ctx, [name]) {
        const json = ctx.getEnvironmentKey(name)
        if (!json) return this.success()
        return this.successJSON(Object.keys(json))
    },
})
import { ArgType, NativeFunction } from "../../structures/@internal/NativeFunction"

export default new NativeFunction({
    name: "$jsonHas",
    version: "2.2.0",
    description: "Returns whether a key exists in a JSON object",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "variable",
            description: "The variable that holds json",
            required: true,
            type: ArgType.String,
            rest: false
        },
        {
            name: "key",
            description: "The key to check for",
            type: ArgType.String,
            required: true,
            rest: false
        }
    ],
    output: ArgType.Boolean,
    execute(ctx, [ name, key ]) {
        const json = ctx.getEnvironmentKey(name)
        if (!json) return this.success()
        return this.success(Object.hasOwn(json, key))
    }
})
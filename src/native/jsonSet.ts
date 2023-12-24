import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$jsonSet",
    category: "unknown",
    version: "1.2.0",
    description: "Adds a json key with a value",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "variable",
            description: "The $env variable to set this value on",
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: "value",
            description: "The value to assign",
            type: ArgType.Json,
            rest: false,
            required: true
        }
    ],
    execute(ctx, [ key, value ]) {
        ctx.setEnvironmentKey(key, value)
        return this.success()
    },
})
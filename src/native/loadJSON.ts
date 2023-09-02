import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$loadJSON",
    version: "1.0.0",
    description: "Loads JSON to an env variable",
    brackets: true,
    args: [
        {
            name: "variable",
            description: "The variable to load it to",
            rest: false,
            type: ArgType.String,
            required: true
        },
        {
            name: "json",
            description: "The json data",
            type: ArgType.Json,
            required: true,
            rest: false
        }
    ],
    unwrap: true,
    execute(ctx, [ name, json ]) {
        ctx.setEnvironmentKey(name, json)
        return Return.success()
    },
})
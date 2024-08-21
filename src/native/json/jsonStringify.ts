import { stringify } from "querystring"
import { ArgType, NativeFunction } from "../../structures/@internal/NativeFunction"
import { Return } from "../../structures/@internal/Return"
import { allowedNodeEnvironmentFlags } from "process"

export default new NativeFunction({
    name: "$jsonStringify",
    version: "1.5.0",
    output: ArgType.Json,
    description: "Returns the JSON in stringified format",
    args: [
        {
            name: "variable",
            description: "The variable to stringify",
            required: true,
            type: ArgType.String,
            rest: false
        },
        {
            name: "space",
            description: "The space to use",
            type: ArgType.Number,
            rest: false
        }
    ],
    brackets: true,
    unwrap: true,
    execute(ctx, [ env, space ]) {
        return this.successJSON(JSON.stringify(ctx.getEnvironmentKey(env), undefined, space || undefined))
    }
})
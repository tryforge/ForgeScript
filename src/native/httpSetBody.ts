import { ArgType, NativeFunction } from "../structures/NativeFunction"
import { Return } from "../structures/Return"

export default new NativeFunction({
    name: "$httpSetBody",
    description: "Sets a JSON body for the request.",
    args: [
        {
            name: "body",
            description: "the JSON body",
            rest: false,
            required: true,
            type: ArgType.Json
        }
    ],
    unwrap: true,
    brackets: true,
    execute(ctx, [ json ]) {
        ctx.http.body = JSON.stringify(json)
        return Return.success()
    },
})
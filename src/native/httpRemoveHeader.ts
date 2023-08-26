import { ArgType, NativeFunction } from "../structures/NativeFunction"
import { Return } from "../structures/Return"

export default new NativeFunction({
    name: "$httpRemoveHeader",
    description: "Removes an HTTP header",
    unwrap: true,
    args: [
        {
            name: "name",
            description: "The header name",
            rest: false,
            type: ArgType.String,
            required: true
        }
    ],
    brackets: true,
    execute(ctx, [ name ]) {
        if (ctx.http.headers) {
            delete ctx.http.headers[name]
        }
        
        return Return.success()
    },
})
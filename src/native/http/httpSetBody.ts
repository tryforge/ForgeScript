import { ArgType, NativeFunction } from "../../structures/@internal/NativeFunction"

export default new NativeFunction({
    name: "$httpSetBody",
    version: "1.0.0",
    description: "Sets a JSON body for the request",
    args: [
        {
            name: "body",
            description: "The JSON body",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    unwrap: true,
    brackets: true,
    execute(ctx, [body]) {
        ctx.http.body = body
        return this.success()
    },
})

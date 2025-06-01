import { HTTPContentType } from "../../structures"
import { ArgType, NativeFunction } from "../../structures/@internal/NativeFunction"

export default new NativeFunction({
    name: "$httpSetContentType",
    version: "1.4.0",
    description: "Forces the http request to be decoded using given content type",
    args: [
        {
            name: "type",
            description: "The content type of the result",
            required: true,
            type: ArgType.Enum,
            enum: HTTPContentType,
            rest: false
        },
    ],
    brackets: true,
    unwrap: true,
    execute(ctx, [type]) {
        ctx.http.contentType = type
        return this.success()
    },
})

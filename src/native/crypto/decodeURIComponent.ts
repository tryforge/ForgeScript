import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$decodeURIComponent",
    version: "1.0.0",
    description: "Decodes text from a url",
    brackets: true,
    unwrap: true,
    output: ArgType.String,
    args: [
        {
            name: "text",
            description: "The text to decode",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    execute(ctx, [text]) {
        return this.success(decodeURIComponent(text))
    },
})

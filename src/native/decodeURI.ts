import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$decodeURI",
    version: "1.0.0",
    description: "Decodes text from a url",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "text",
            description: "The text to decode",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    execute(_, [text]) {
        return Return.success(decodeURI(text))
    },
})

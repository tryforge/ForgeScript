import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$encodeURI",
    version: "1.0.0",
    description: "Encodes text for a url",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "text",
            description: "The text to encode",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    execute(_, [text]) {
        return Return.success(encodeURI(text))
    },
})

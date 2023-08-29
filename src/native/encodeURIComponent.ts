import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$encodeURIComponent",
    description: "Encodes text for a url",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "text",
            description: "The text to encode",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    execute(ctx, [ text ]) {
        return Return.success(encodeURIComponent(text))
    },
})
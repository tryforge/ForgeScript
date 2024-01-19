import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$cropText",
    version: "1.0.3",
    description: "Crops given text",
    brackets: true,
    output: ArgType.String,
    args: [
        {
            name: "text",
            description: "The text to crop",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "start index",
            description: "The start index to start cropping",
            rest: false,
            required: true,
            type: ArgType.Number,
        },
        {
            name: "end index",
            description: "The end index to finish cropping",
            rest: false,
            type: ArgType.Number,
        },
    ],
    unwrap: true,
    execute(ctx, [text, start, end]) {
        return this.success(text.slice(start, end || undefined))
    },
})

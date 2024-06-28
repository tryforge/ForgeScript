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
        {
            name: "ending",
            description: "Add extra text to the end",
            rest: false,
            type: ArgType.String
        }
    ],
    unwrap: true,
    execute(ctx, [text, start, end, ending]) {
        const cropped = text.slice(start, end || undefined)
        return this.success(ending && end && cropped.length > end ? cropped + ending : cropped)
    },
})

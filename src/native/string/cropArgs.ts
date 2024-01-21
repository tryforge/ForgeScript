import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$cropArgs",
    version: "1.4.0",
    description: "Crops given args",
    brackets: true,
    output: ArgType.String,
    args: [
        {
            name: "args",
            description: "The args to crop",
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
        return this.success(
            text
                .split(/ +/)
                .slice(start, end || undefined)
                .join(" ")
        )
    },
})

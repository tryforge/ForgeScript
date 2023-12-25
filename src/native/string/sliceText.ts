import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$sliceText",
    category: "string",
    version: "1.3.0",
    description: "Slices given text",
    brackets: true,
    args: [
        {
            name: "text",
            description: "The text to slice",
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: "start",
            description: "The start index",
            rest: false,
            required: false,
            type: ArgType.Number
        },
        {
            name: "end",
            description: "The end index",
            rest: false,
            required: false,
            type: ArgType.Number
        }
    ],
    unwrap: true,
    execute(ctx, [ text, start, end ]) {
        return this.success(text.trim().split(/ +/g).slice(start ?? undefined, end ?? undefined).join(" "))
    },
})
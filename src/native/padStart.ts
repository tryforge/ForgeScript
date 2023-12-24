import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$padStart",
    category: "unknown",
    version: "1.0.6",
    description: "Pads a string at the start",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "message",
            description: "The string to pad at the start",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "max length",
            description: "The max length of the string",
            rest: false,
            required: true,
            type: ArgType.Number,
        },
        {
            name: "filler",
            description: "The filler to use to pad",
            rest: false,
            type: ArgType.String,
        },
    ],
    execute(_, [str, max, filler]) {
        return this.success(str.padStart(max, filler || undefined))
    },
})

import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$padEnd",
    version: "1.0.6",
    description: "Pads a string at the end",
    brackets: true,
    output: ArgType.String,
    unwrap: true,
    args: [
        {
            name: "message",
            description: "The string to pad at the end",
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
    execute(ctx, [str, max, filler]) {
        return this.success(str.padEnd(max, filler || undefined))
    },
})

import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$replaceRegex",
    version: "1.0.0",
    description: "Replaces text in a string using regex",
    unwrap: true,
    args: [
        {
            name: "text",
            description: "The base text",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "match",
            description: "Regex to match in base",
            rest: false,
            required: true,
            type: ArgType.String,
            pointer: 2,
        },
        {
            name: "flags",
            description: "The flags to use for the regex",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "new value",
            description: "The text to replace matches with",
            type: ArgType.String,
            rest: false,
            required: true,
        },
        {
            name: "amount",
            description: "How many times to perform this replacement",
            rest: false,
            type: ArgType.Number,
        },
    ],
    brackets: true,
    execute(_, [text, raw, flags, replacement, amount]) {
        amount ??= -1
        const regex = new RegExp(raw, flags)

        if (amount === -1) {
            return this.success(text.replace(regex, replacement))
        }
        let i = 0
        return this.success(text.replace(regex, (m) => (++i <= amount! ? replacement : m)))
    },
})

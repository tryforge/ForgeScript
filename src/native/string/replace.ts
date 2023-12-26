import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$replace",
    version: "1.0.0",
    description: "Replace text in a string",
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
            description: "Text to match in base",
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
    execute(_, [text, match, replacement, amount]) {
        amount ??= -1
        if (amount === -1) {
            return this.success(text.replaceAll(match, replacement))
        }
        let i = 0
        return this.success(text.replaceAll(match, (m) => (++i <= amount! ? replacement : m)))
    },
})

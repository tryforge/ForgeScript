import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$charCount",
    version: "1.0.0",
    aliases: ["$textLength"],
    description: "Gets the char count of a text",
    brackets: true,
    unwrap: true,
    output: ArgType.Number,
    args: [
        {
            name: "text",
            description: "The text to get its length",
            rest: false,
            type: ArgType.String,
            required: true,
        },
        {
            name: "char",
            description: "The character to count in the text",
            rest: false,
            type: ArgType.String
        }
    ],
    execute(ctx, [str, char]) {
        if (char === null) {
            return this.success(str.length)
        } else {
            return this.success(str.split(char).length - 1)
        }
    },
})
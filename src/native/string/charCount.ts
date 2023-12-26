import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$charCount",
    version: "1.0.0",
    description: "Gets the char count of a text",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "text",
            description: "The text to get its length",
            rest: false,
            type: ArgType.String,
            required: true,
        },
    ],
    execute(_, [str]) {
        return this.success(str.length)
    },
})

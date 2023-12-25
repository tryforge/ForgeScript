import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$case",
    category: "statement",
    version: "1.0.3",
    description: "Adds a switch case",
    brackets: true,
    experimental: true,
    unwrap: true,
    args: [
        {
            name: "value",
            description: "The match case",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "code",
            description: "Code to execute if it matches this case",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    execute(_, [, code]) {
        return this.success(code)
    },
})

import { ArgType, NativeFunction, Return } from "../../structures"

const NoNumberRegex = /[^0-9.]/g

export default new NativeFunction({
    name: "$separateNumber",
    version: "1.0.0",
    description: "Separates thousands in the number",
    unwrap: true,
    output: ArgType.Number,
    args: [
        {
            name: "number",
            description: "The number to separate",
            rest: false,
            type: ArgType.Number,
            required: true,
        },
        {
            name: "separator",
            description: "The separator to use",
            type: ArgType.String,
            rest: false,
        },
    ],
    brackets: true,
    execute(_, [n, sep]) {
        const t = n.toLocaleString()
        return this.success(sep ? t.replaceAll(NoNumberRegex, sep) : t)
    },
})

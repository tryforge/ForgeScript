import { ArgType, NativeFunction, Return } from "../structures"

const NoNumberRegex = /[^0-9]/g

export default new NativeFunction({
    name: "$separateNumber",
    description: "Separates thousands in the number",
    unwrap: true,
    args: [
        {
            name: "number",
            description: "The number to separate",
            rest: false,
            type: ArgType.Number,
            required: true
        },
        {
            name: "separator",
            description: "The separator to use",
            type: ArgType.String,
            rest: false
        }
    ],
    brackets: true,
    execute(ctx, [ n, sep ]) {
        const t = n.toLocaleString()
        return Return.success(sep ? t.replaceAll(NoNumberRegex, sep) : t)
    },
})
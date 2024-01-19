import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$base",
    version: "1.1.0",
    description: "Convert number from one base to another",
    brackets: true,
    unwrap: true,
    output: ArgType.Number,
    args: [
        {
            name: "number",
            description: "The target number for conversion",
            type: ArgType.String,
            rest: false,
            required: true,
        },
        {
            name: "to",
            description: "The target base",
            type: ArgType.Number,
            rest: false,
            required: true,
        },
        {
            name: "from",
            description: "The source base",
            type: ArgType.Number,
            rest: false,
        },
    ],
    execute(ctx, [n, to, from]) {
        return this.success(parseInt(n, from ?? 10).toString(to))
    },
})

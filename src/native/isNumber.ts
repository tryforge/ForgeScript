import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$isNumber",
    version: "1.0.0",
    description: "Returns whether the number is valid",
    unwrap: true,
    args: [
        {
            name: "number",
            description: "The number to check",
            required: true,
            rest: false,
            type: ArgType.String,
        },
    ],
    brackets: true,
    execute(_, [n]) {
        return this.success(!!n && !isNaN(Number(n)))
    },
})

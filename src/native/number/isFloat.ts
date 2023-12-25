import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$isFloat",
    category: "number",
    version: "1.0.0",
    description: "Whether the number is a float",
    unwrap: true,
    args: [
        {
            name: "number",
            description: "The number to check",
            required: true,
            rest: false,
            type: ArgType.Number,
        },
    ],
    brackets: true,
    execute(_, [n]) {
        return this.success(n % 1 !== 0)
    },
})

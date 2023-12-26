import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$floor",
    category: "math",
    version: "1.0.0",
    description: "Returns the greatest integer less than or equal to its numeric argument",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "number",
            description: "The number to use",
            rest: false,
            type: ArgType.Number,
            required: true,
        },
    ],
    execute(_, [n]) {
        return this.success(Math.floor(n))
    },
})

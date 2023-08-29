import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$isFloat",
    description: "Whether the number is a float",
    unwrap: true,
    args: [
        {
            name: "number",
            description: "The number to check",
            required: true,
            rest: false,
            type: ArgType.Number
        }
    ],
    brackets: true,
    execute(ctx, [ n ]) {
        return Return.success(n % 1 !== 0)
    },
})
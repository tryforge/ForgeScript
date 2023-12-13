import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$parseInt",
    version: "1.2.0",
    description: "Implements native parseInt's function into ForgeScript",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "value",
            description: "The number to parse",
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: "radix",
            rest: false,
            required: false,
            description: "Radix to use for the parser",
            type: ArgType.Number
        }
    ],
    execute(ctx, [ val, radix ]) {
        return this.success(parseInt(val, radix ?? undefined))
    },
})
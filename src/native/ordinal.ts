import { ordinal } from "../functions/ordinal"
import { ArgType, NativeFunction } from "../structures"

export default new NativeFunction({
    name: "$ordinal",
    version: "1.3.0",
    description: "Appends a suffix to the number",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "number",
            description: "The number to append suffix to",
            rest: false,
            required: true,
            type: ArgType.Number
        }
    ],
    execute(ctx, [ n ]) {
        return this.success(ordinal(n))
    },
})
import { ArgType, NativeFunction } from "../structures/NativeFunction"
import { Return } from "../structures/Return"

export default new NativeFunction({
    name: "$return",
    version: "1.0.0",
    description: "Returns a value",
    unwrap: true,
    args: [
        {
            name: "value",
            description: "The value to return",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    brackets: false,
    execute(_, [ val ]) {
        return Return.return(val ?? "")
    },
})

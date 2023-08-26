import { ArgType, NativeFunction } from "../structures/NativeFunction"
import { Return } from "../structures/Return"

export default new NativeFunction({
    name: "$return",
    description: "Returns a value",
    unwrap: true,
    args: [
        {
            name: "value",
            description: "The value to return",
            rest: true,
            required: true,
            type: ArgType.String
        }
    ],
    brackets: true,
    execute(ctx, [ args ]) {
        return Return.return(args.join(";"))
    },
})
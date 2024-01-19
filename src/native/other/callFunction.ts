import { ErrorType } from "../../structures/forge/ForgeError"
import { ArgType, NativeFunction } from "../../structures/@internal/NativeFunction"
import { Return } from "../../structures/@internal/Return"

export default new NativeFunction({
    name: "$callFunction",
    version: "1.0.0",
    description: "Calls a forge function made by the user",
    unwrap: true,
    output: ArgType.Unknown,
    args: [
        {
            name: "name",
            description: "The function name",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "args",
            description: "The args to call this function with",
            rest: true,
            type: ArgType.String,
            required: true,
        },
    ],
    brackets: true,
    execute(ctx, [name, args]) {
        const fn = ctx.client.functions.get(name)
        if (!fn) return this.error(ErrorType.UnknownXName, "function", name)

        return fn.call(ctx, args)
    },
})

import { inspect } from "util"
import { ErrorType } from "../structures/ForgeError"
import { ArgType, NativeFunction } from "../structures/NativeFunction"
import { Return } from "../structures/Return"

export default new NativeFunction({
    name: "$djsEval",
    version: "1.0.0",
    description: "Evals given js code",
    unwrap: true,
    args: [
        {
            name: "code",
            description: "The code to eval",
            rest: true,
            required: true,
            type: ArgType.String,
        },
    ],
    brackets: true,
    async execute(ctx, [arg]) {
        const code = arg.join(";")
        try {
            let evaled = await eval(code)
            if (typeof evaled !== "string") evaled = inspect(evaled, { depth: 1 })
            return this.success(evaled)
        } catch (error: unknown) {
            return this.err(this.error(ErrorType.Custom, (error as Error).message))
        }
    },
})

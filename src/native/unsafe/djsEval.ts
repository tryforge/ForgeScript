import { inspect } from "util"
import { ErrorType } from "../../structures/forge/ForgeError"
import { ArgType, NativeFunction } from "../../structures/@internal/NativeFunction"

export default new NativeFunction({
    name: "$djsEval",
    version: "1.0.0",
    aliases: ["$js"],
    description: "Evaluates JavaScript code",
    unwrap: true,
    output: ArgType.Unknown,
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
            return this.error(ErrorType.Custom, (error as Error).message)
        }
    },
})

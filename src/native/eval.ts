import { Compiler } from "../core/Compiler"
import { Interpreter } from "../core/Interpreter"
import { ArgType, NativeFunction } from "../structures/NativeFunction"
import { Return } from "../structures/Return"

export default new NativeFunction({
    name: "$eval",
    version: "1.0.0",
    description: "Evaluates given code.",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "code",
            type: ArgType.String,
            rest: false,
            required: true,
            description: "The code to eval"
        },
        {
            name: "send",
            type: ArgType.Boolean,
            rest: false,
            description: "Whether to send as new message"
        }
    ],
    async execute(ctx, [ code, send ]) {
        try {
            const result = await Interpreter.run({
                ...ctx.runtime,
                data: Compiler.compile(code),
                doNotSend: !send
            })

            return result === null ? Return.stop() : Return.success(send ? undefined : result)
        } catch (error: unknown) {
            console.error(error)
            return Return.error(error as Error)
        }
    }
})
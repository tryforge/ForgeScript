import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$argCount",
    version: "1.0.0",
    description: "Counts the number of args in a message",
    aliases: ["$argsCount"],
    unwrap: true,
    brackets: false,
    output: ArgType.Number,
    args: [
        {
            name: "text",
            description: "Text to count arguments",
            required: true,
            rest: false,
            type: ArgType.String,
        },
    ],
    execute(ctx, [text]) {
        if (this.hasFields) {
            const trimmed = text.trim()
            return this.success(trimmed ? trimmed.split(/ +/).length : 0)
        }
        return this.success(ctx.args.length)
    },
})
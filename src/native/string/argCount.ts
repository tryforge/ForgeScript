import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$argCount",
    category: "string",
    version: "1.0.0",
    brackets: false,
    description: "Counts number of args in message",
    unwrap: true,
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
        if (this.hasFields) return this.success(text.trim().split(/ +/).length)
        return this.success(ctx.args.length)
    },
})

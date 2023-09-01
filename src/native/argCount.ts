import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$argCount",
    brackets: false,
    description: "Counts number of args in message",
    unwrap: true,
    args: [
        {
            name: "text",
            description: "Text to count arguments",
            required: true,
            rest: false,
            type: ArgType.String
        }
    ],
    execute(ctx, [ text ]) {
        if (this.hasFields) return Return.success(text.trim().split(/ +/).length)
        return Return.success(ctx.args.length)
    },
})
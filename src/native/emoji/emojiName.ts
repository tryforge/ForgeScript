import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$emojiName",
    version: "1.2.0",
    description: "Returns the emoji name",
    brackets: false,
    unwrap: true,
    output: ArgType.String,
    args: [
        {
            name: "emoji ID",
            description: "The emoji id to return its name",
            rest: false,
            type: ArgType.Emoji,
            required: true,
        },
    ],
    execute(ctx, [emoji]) {
        return this.success((emoji ?? ctx.emoji)?.name)
    },
})
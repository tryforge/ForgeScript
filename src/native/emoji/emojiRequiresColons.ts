import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$emojiRequiresColons",
    version: "1.0.0",
    description: "Returns whether the emoji requires colons",
    brackets: false,
    unwrap: true,
    output: ArgType.Boolean,
    args: [
        {
            name: "emoji ID",
            description: "The emoji id to return its colons state",
            rest: false,
            type: ArgType.GuildEmoji,
            required: true,
        },
    ],
    execute(ctx, [emoji]) {
        emoji ?? ctx.emoji
        return this.success(emoji?.requiresColons)
    },
})

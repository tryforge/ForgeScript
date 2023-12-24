import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$emojiCreatedAt",
    category: "unknown",
    version: "1.0.0",
    description: "Returns the emoji creation timestamp",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "emoji ID",
            description: "The emoji id to return its creation timestamp",
            rest: false,
            type: ArgType.GuildEmoji,
            required: true,
        },
    ],
    execute(ctx, [emoji]) {
        emoji ?? ctx.emoji
        return this.success(emoji?.createdTimestamp)
    },
})

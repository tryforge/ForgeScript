import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$emojiAnimated",
    version: "1.0.0",
    description: "Returns whether the emoji is animated",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "emoji ID",
            description: "The emoji id to return its animation state",
            rest: false,
            type: ArgType.GuildEmoji,
            required: true,
        },
    ],
    execute(ctx, [emoji]) {
        emoji ?? ctx.emoji
        return this.success(emoji?.animated)
    },
})

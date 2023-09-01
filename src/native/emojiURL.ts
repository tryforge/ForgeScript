import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$emojiURL",
    description: "Returns the emoji url",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "emoji ID",
            description: "The emoji id to return its url",
            rest: false,
            type: ArgType.GuildEmoji,
            required: true
        }
    ],
    execute(ctx, [ emoji ]) {
        emoji ?? ctx.emoji
        return Return.success(
            emoji?.url
        )
    },
})
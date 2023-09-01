import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$emojiName",
    description: "Returns the emoji name",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "emoji ID",
            description: "The emoji id to return its name",
            rest: false,
            type: ArgType.GuildEmoji,
            required: true
        }
    ],
    execute(ctx, [ emoji ]) {
        emoji ?? ctx.emoji
        return Return.success(
            emoji?.name
        )
    },
})
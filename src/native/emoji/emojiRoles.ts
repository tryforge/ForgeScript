import array from "../../functions/array"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$emojiRoles",
    version: "1.0.0",
    description: "Returns the role ids that can use this emote",
    brackets: false,
    unwrap: true,
    output: array<ArgType.Role>(),
    args: [
        {
            name: "emoji ID",
            description: "The emoji id to return its roles",
            rest: false,
            type: ArgType.GuildEmoji,
            required: true,
        },
        {
            name: "separator",
            description: "The separator to use for every role",
            rest: false,
            type: ArgType.String,
        },
    ],
    execute(ctx, [emoji, sep]) {
        emoji ?? ctx.emoji
        return this.success(emoji?.roles.cache.map((x) => x.id).join(sep || ", "))
    },
})

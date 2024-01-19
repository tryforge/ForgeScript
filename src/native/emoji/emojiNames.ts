import array from "../../functions/array"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$emojiNames",
    version: "1.0.0",
    description: "Returns the emote names of a guild",
    brackets: false,
    output: array<ArgType.String>(),
    args: [
        {
            name: "guild ID",
            description: "The guild to return the emotes of",
            rest: false,
            type: ArgType.Guild,
            required: true,
        },
        {
            name: "separator",
            description: "The separator to use for each emoji",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    unwrap: true,
    execute(ctx, [guild, sep]) {
        return this.success((guild ?? ctx.guild)?.emojis.cache.map((x) => x.toString()).join(sep || ", "))
    },
})

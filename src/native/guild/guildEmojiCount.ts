import { ArgType, NativeFunction, Return } from "../../structures"
import { EmojiType } from "../emoji/emojiCount"

export default new NativeFunction({
    name: "$guildEmojiCount",
    version: "1.0.0",
    description: "Returns the emoji count of a guild",
    brackets: false,
    aliases: [
        "$serverEmojiCount"
    ],
    output: ArgType.Number,
    unwrap: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to get emotes from",
            rest: false,
            type: ArgType.Guild,
            required: true,
        },
        {
            name: "type",
            description: "The type of the emotes to count",
            rest: false,
            type: ArgType.Enum,
            enum: EmojiType
        },
    ],
    execute(ctx, [guild, type]) {
        guild ??= ctx.guild!
        const emojis = guild.emojis.cache

        return this.success(!type ? emojis.size : emojis.filter(emoji =>
            type === EmojiType.normal
                ? !emoji.animated
                : type === EmojiType.animated
                    ? emoji.animated
                    : (true as never)
        ).size)
    },
})
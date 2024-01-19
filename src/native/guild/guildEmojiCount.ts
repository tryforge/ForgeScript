import { ArgType, NativeFunction, Return } from "../../structures"

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
    ],
    execute(ctx, [guild]) {
        guild ??= ctx.guild!
        return this.success(guild.emojis.cache.size)
    },
})

import { ArgType, NativeFunction } from "../structures"

export default new NativeFunction({
    name: "$guildEmojiIDs",
    version: "1.3.0",
    unwrap: true,
    brackets: false,
    description: "Returns every emoji id of the guild",
    args: [
        {
            name: "guild ID",
            rest: false,
            required: true,
            type: ArgType.Guild,
            description: "The guild to get emoji ids from"
        },
        {
            name: "separator",
            description: "The separator to use for every emoji",
            rest: false,
            type: ArgType.String
        }
    ],
    execute(ctx, [ guild, sep ]) {
        guild ??= ctx.guild!
        return this.success(guild?.emojis.cache.map(x => x.id).join(sep ?? ", "))
    },
})
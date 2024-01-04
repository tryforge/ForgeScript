import array from "../../functions/array"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$guildStickerIDs",
    version: "1.3.0",
    unwrap: true,
    aliases: [
        "$serverStickerIDs"
    ],
    output: array<ArgType.GuildSticker>(),
    brackets: false,
    description: "Returns every sticker id of the guild",
    args: [
        {
            name: "guild ID",
            rest: false,
            required: true,
            type: ArgType.Guild,
            description: "The guild to get sticker ids from"
        },
        {
            name: "separator",
            description: "The separator to use for every sticker",
            rest: false,
            type: ArgType.String
        }
    ],
    execute(ctx, [ guild, sep ]) {
        guild ??= ctx.guild!
        return this.success(guild?.stickers.cache.map(x => x.id).join(sep ?? ", "))
    },
})
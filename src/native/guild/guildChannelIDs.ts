import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$guildChannelIDs",
    version: "1.3.0",
    unwrap: true,
    brackets: false,
    aliases: [
        "$serverChannelIDs"
    ],
    description: "Returns every channel id of the guild",
    args: [
        {
            name: "guild ID",
            rest: false,
            required: true,
            type: ArgType.Guild,
            description: "The guild to get channel ids from"
        },
        {
            name: "separator",
            description: "The separator to use for every channel",
            rest: false,
            type: ArgType.String
        }
    ],
    execute(ctx, [ guild, sep ]) {
        guild ??= ctx.guild!
        return this.success(guild?.channels.cache.map(x => x.id).join(sep ?? ", "))
    },
})
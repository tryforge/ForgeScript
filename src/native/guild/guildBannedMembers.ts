import noop from "../../functions/noop"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$guildBannedMembers",
    version: "1.4.0",
    description: "Returns banned member ids of a guild",
    aliases: [
        "$serverBannedMembers",
        "$guildBannedUsers",
        "$serverBannedUsers",
        "$getGuildBannedUsers",
        "$getServerBannedUsers",
        "$getGuildBannedMembers",
        "$getServerBannedMembers",
        "$bannedUsers",
        "$bannedMembers"
    ],
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "guild ID",
            rest: false,
            required: true,
            type: ArgType.Guild,
            description: "The guild to pull banned members from"
        },
        {
            name: "separator",
            rest: false,
            type: ArgType.String,
            description: "The separator for each id"
        }
    ],
    async execute(ctx, [ g, sep ]) {
        g ??= ctx.guild!
        const bans = await g?.bans.fetch().catch(noop)
        return this.success(bans ? bans.map(x => x.user.id).join(sep ?? ", ") : null)
    },
})
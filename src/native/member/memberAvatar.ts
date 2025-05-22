import { CDN, GuildMember, ImageExtension, ImageSize } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$memberAvatar",
    version: "1.0.0",
    description: "Returns the member avatar",
    brackets: false,
    output: ArgType.URL,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull member from",
            rest: false,
            type: ArgType.Guild,
            required: true,
        },
        {
            name: "user ID",
            description: "The user to retrieve the avatar",
            rest: false,
            required: true,
            pointer: 0,
            type: ArgType.Member,
        },
        {
            name: "size",
            description: "The size to use for the image",
            rest: false,
            type: ArgType.Number,
        },
        {
            name: "extension",
            description: "The extension to use for the image",
            rest: false,
            type: ArgType.String,
        },
    ],
    unwrap: true,
    execute(ctx, [guild, user, size, ext]) {
        const member = user ?? ctx.member ?? ctx.interaction?.member

        if (member.avatar) {
            return this.success(new CDN().guildMemberAvatar(guild?.id ?? ctx.guild?.id ?? ctx.interaction?.guildId, member.user.id, member.avatar, {
                extension: (ext as ImageExtension) || undefined,
                size: (size as ImageSize) || 2048,
            }))
        }

        return this.success(member.user.avatar
            ? new CDN().avatar(member.user.id, member.user.avatar, {
                extension: (ext as ImageExtension) || undefined,
                size: (size as ImageSize) || 2048,
            })
            : (member instanceof GuildMember ? member.user.defaultAvatarURL : null)
        )
    },
})
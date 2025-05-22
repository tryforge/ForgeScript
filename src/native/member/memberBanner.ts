import { CDN, GuildMember, ImageExtension, ImageSize } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$memberBanner",
    version: "2.1.0",
    description: "Returns the member banner",
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
            description: "The user to retrieve the banner",
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
    async execute(ctx, [guild, user, size, ext]) {
        const memb = user ?? ctx.member ?? ctx.interaction?.member
        const member = memb instanceof GuildMember && memb.banner == null ? await memb.fetch() : memb

        if (member.banner) {
            return this.success(new CDN().guildMemberBanner(guild?.id ?? ctx.guild?.id ?? ctx.interaction?.guildId, member.user.id, member.banner, {
                extension: (ext as ImageExtension) || undefined,
                size: (size as ImageSize) || 2048,
            }))
        }

        const banner = member.user.banner ?? (await ctx.client.users.fetch(member.user.id)).banner
        return this.success(banner
            ? new CDN().banner(member.user.id, banner, {
                extension: (ext as ImageExtension) || undefined,
                size: (size as ImageSize) || 2048,
            })
            : null
        )
    },
})
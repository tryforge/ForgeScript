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
    execute(ctx, [, user, size, ext]) {
        const member = user ?? ctx.member ?? ctx.interaction?.member
        const hash = member?.avatar ?? member?.user?.avatar

        return this.success(
            member?.user && hash
                ? new CDN().avatar(member.user.id, hash, {
                    extension: (ext as ImageExtension) || undefined,
                    size: (size as ImageSize) || 2048,
                })
                : (member as GuildMember)?.user?.defaultAvatarURL
        )
    },
})
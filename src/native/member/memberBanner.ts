import { CDN, ImageExtension, ImageSize } from "discord.js"
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
    execute(ctx, [, user, size, ext]) {
        const member = user ?? ctx.member ?? ctx.interaction?.member
        const hash = member?.banner ?? member?.user?.banner
        
        return this.success(
            member?.user && hash
                ? new CDN().banner(member.user.id, hash, {
                    extension: (ext as ImageExtension) || undefined,
                    size: (size as ImageSize) || 2048,
                })
                : null
        )
    },
})
import { ImageExtension, ImageSize } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$userBanner",
    description: "Returns the user banner",
    brackets: false,
    args: [
        {
            name: "user ID",
            description: "The user to retrieve the banner",
            rest: false,
            required: true,
            type: ArgType.User
        },
        {
            name: "size",
            description: "The size to use for the image",
            rest: false,
            type: ArgType.Number
        },
        {
            name: "extension",
            description: "The extension to use for the image",
            rest: false,
            type: ArgType.String
        }
    ],
    unwrap: true,
    execute(ctx, [ user, size, ext ]) {
        return Return.success(
            (user ?? ctx.user)?.bannerURL({
                extension: ext as ImageExtension || undefined,
                size: size as ImageSize || 2048
            })
        )
    },
})
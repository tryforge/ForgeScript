import { ImageExtension, ImageSize } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$userAvatar",
    category: "user",
    version: "1.0.0",
    description: "Returns the user avatar",
    brackets: false,
    args: [
        {
            name: "user ID",
            description: "The user to retrieve the avatar",
            rest: false,
            required: true,
            type: ArgType.User,
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
    execute(ctx, [user, size, ext]) {
        return this.success(
            (user ?? ctx.user)?.displayAvatarURL({
                extension: (ext as ImageExtension) || undefined,
                size: (size as ImageSize) || 2048,
            })
        )
    },
})

import { ImageExtension, ImageSize } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$guildSplashURL",
    version: "1.0.0",
    description: "Returns the guild splash url",
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to retrieve the splash",
            rest: false,
            required: true,
            type: ArgType.Guild,
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
    execute(ctx, [g, size, ext]) {
        return Return.success(
            (g ?? ctx.guild)?.splashURL({
                extension: (ext as ImageExtension) || undefined,
                size: (size as ImageSize) || 2048,
            })
        )
    },
})

import { ImageExtension, ImageSize } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$guildIcon",
    version: "1.0.0",
    description: "Returns the server icon",
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to retrieve the guild icon",
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
    execute(ctx, [guild, size, ext]) {
        return Return.success(
            (guild ?? ctx.guild)?.iconURL({
                extension: (ext as ImageExtension) || undefined,
                size: (size as ImageSize) || 2048,
            })
        )
    },
})

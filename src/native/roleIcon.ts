import { ImageExtension, ImageSize } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$roleIcon",
    description: "Returns the role icon",
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to retrieve the role from",
            rest: false,
            required: true,
            type: ArgType.Guild
        },
        {
            name: "role ID",
            description: "The role to use to get its icon",
            rest: false,
            required: true,
            pointer: 0,
            type: ArgType.Role
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
    execute(ctx, [ guild, role, size, ext ]) {
        return Return.success(
            (role ?? ctx.role)?.iconURL({
                extension: ext as ImageExtension || undefined,
                size: size as ImageSize || 2048
            })
        )
    },
})
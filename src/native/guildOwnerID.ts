import { ImageExtension, ImageSize } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$guildOwnerID",
    version: "1.0.0",
    description: "Returns the server owner id",
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to retrieve the owner from",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
    ],
    unwrap: true,
    execute(ctx, [guild]) {
        return Return.success((guild ?? ctx.guild)?.ownerId)
    },
})

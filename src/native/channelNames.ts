import { ImageExtension, ImageSize } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$channelNames",
    description: "Returns the channel names of a guild",
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to return the roles of",
            rest: false,
            type: ArgType.Guild,
            required: true
        },
        {
            name: "separator",
            description: "The separator to use for each channel",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    unwrap: true,
    execute(ctx, [ guild, sep ]) {
        return Return.success(
            (guild ?? ctx.guild)?.channels.cache.map(x => x.name).join(sep || ", ")
        )
    },
})
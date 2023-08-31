import { ImageExtension, ImageSize } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$guildBoostLevel",
    description: "Returns the server boost tier",
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to retrieve the data",
            rest: false,
            required: true,
            type: ArgType.Guild
        }
    ],
    unwrap: true,
    execute(ctx, [ guild ]) {
        return Return.success(
            (guild ?? ctx.guild)?.premiumTier
        )
    },
})
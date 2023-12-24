import { GuildDefaultMessageNotifications, GuildExplicitContentFilter, GuildMFALevel, GuildNSFWLevel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$guildNSFWLevel",
    category: "unknown",
    version: "1.3.0",
    description: "Returns the nsfw level for this guild",
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to retrieve the data",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
    ],
    unwrap: true,
    execute(ctx, [guild]) {
        guild.nameAcronym
        return this.success(GuildNSFWLevel[(guild ?? ctx.guild)?.nsfwLevel])
    },
})

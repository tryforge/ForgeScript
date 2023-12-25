import { GuildDefaultMessageNotifications, GuildExplicitContentFilter } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$guildExplicitContentFilter",
    category: "guild",
    version: "1.3.0",
    description: "Returns the explicit content filter level for this guild",
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
        guild.widgetChannelId
        return this.success(GuildExplicitContentFilter[(guild ?? ctx.guild)?.explicitContentFilter])
    },
})

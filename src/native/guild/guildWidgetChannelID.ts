import { GuildDefaultMessageNotifications, GuildExplicitContentFilter } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$guildWidgetChannelID",
    version: "1.3.0",
    description: "Returns the widget channel for this guild",
    brackets: false,
    aliases: [
        "$serverWidgetChannelID"
    ],
    output: ArgType.Channel,
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
        return this.success((guild ?? ctx.guild)?.widgetChannelId)
    },
})

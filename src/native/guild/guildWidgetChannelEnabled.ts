import { GuildDefaultMessageNotifications, GuildExplicitContentFilter } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$guildWidgetChannelEnabled",
    version: "1.3.0",
    description: "Returns whether widget channel is enabled for this guild",
    brackets: false,
    aliases: [
        "$serverWidgetChannelEnabled"
    ],
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
        return this.success((guild ?? ctx.guild)?.widgetEnabled)
    },
})

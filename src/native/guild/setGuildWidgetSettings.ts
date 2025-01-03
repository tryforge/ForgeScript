import { BaseChannel, CategoryChannel, ForumChannel, GuildChannel, MediaChannel, NewsChannel, StageChannel, TextChannel, VoiceBasedChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$setGuildWidgetSettings",
    version: "2.1.0",
    description: "Sets the widget settings of a guild, returns bool",
    unwrap: true,
    aliases: [
        "$setServerWidgetSettings"
    ],
    output: ArgType.Boolean,
    args: [
        {
            name: "guild ID",
            description: "The guild to set widget settings on",
            rest: false,
            type: ArgType.Guild,
            required: true,
        },
        {
            name: "channel ID",
            description: "The invite channel for the widget",
            rest: false,
            type: ArgType.Channel,
            check: (i: BaseChannel) => (i instanceof GuildChannel && !(i instanceof StageChannel) && !(i instanceof CategoryChannel))
        },
        {
            name: "enabled",
            description: "Whether to enable the widget",
            rest: false,
            type: ArgType.Boolean,
        },
        {
            name: "reason",
            description: "The reason for this action",
            rest: false,
            type: ArgType.String,
        },
    ],
    brackets: true,
    async execute(ctx, [guild, chan, enabled, reason]) {
        return this.success((await guild.setWidgetSettings(
            {
                channel: chan as NewsChannel | TextChannel | ForumChannel | MediaChannel | VoiceBasedChannel || null,
                enabled: enabled ?? guild.widgetEnabled ?? false
            },
            reason || undefined
        ).catch(() => false)) !== false)
    },
})
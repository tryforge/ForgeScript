import { BaseChannel, ChannelType, ForumChannel, ThreadAutoArchiveDuration, ThreadChannel } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$setDefaultThreadArchiveDuration",
    version: "1.5.0",
    description: "Modifies a forum's auto archive thread duration",
    unwrap: true,
    output: ArgType.Boolean,
    aliases: [
        "$setDefaultThreadAutoArchiveDuration"
    ],
    brackets: true,
    args: [
        {
            name: "channel ID",
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.type === ChannelType.GuildForum,
            description: "The forum to modify",
            rest: false,
            required: true
        },
        {
            name: "duration",
            description: "The new duration of auto archive",
            type: ArgType.Enum,
            enum: ThreadAutoArchiveDuration,
            rest: false,
            required: true
        },
        {
            name: "reason",
            description: "Reason for modifying archive duration",
            rest: false,
            type: ArgType.String
        }
    ],
    async execute(ctx, [ ch, dur, reason ]) {
        return this.success(!!((ch as ForumChannel).setDefaultAutoArchiveDuration(dur, reason ?? undefined)))
    },
})
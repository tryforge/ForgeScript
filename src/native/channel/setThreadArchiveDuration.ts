import { BaseChannel, ThreadAutoArchiveDuration, ThreadChannel } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$setThreadArchiveDuration",
    version: "1.5.0",
    description: "Modifies a thread's auto archive duration",
    unwrap: true,
    output: ArgType.Boolean,
    aliases: [
        "$setThreadAutoArchiveDuration"
    ],
    brackets: true,
    args: [
        {
            name: "channel ID",
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isThread(),
            description: "The thread to modify",
            rest: false
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
        return this.success(!!((ch as ThreadChannel).setAutoArchiveDuration(dur, reason ?? undefined)))
    },
})
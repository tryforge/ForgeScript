import { BaseChannel, ThreadAutoArchiveDuration, ThreadChannel } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$setThreadArchiveDuration",
    version: "1.5.0",
    description: "Sets a thread's auto archive duration",
    unwrap: true,
    output: ArgType.Boolean,
    aliases: [
        "$setThreadAutoArchiveDuration"
    ],
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The thread to modify",
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isThread(),
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
        return this.success(!!(await (ch as ThreadChannel).setAutoArchiveDuration(dur, reason || undefined).catch(ctx.noop)))
    },
})
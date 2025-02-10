import { BaseChannel, ThreadAutoArchiveDuration, ThreadOnlyChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$forumDefaultThreadArchiveDuration",
    version: "2.2.0",
    description: "Returns the default auto archive duration for threads of a forum",
    aliases: [
        "$forumDefaultThreadAutoArchiveDuration"
    ],
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to get default sort order from",
            rest: false,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isThreadOnly(),
            required: true
        },
    ],
    output: ThreadAutoArchiveDuration,
    execute(ctx, [chan]) {
        return this.success(ThreadAutoArchiveDuration[(chan as ThreadOnlyChannel)?.defaultAutoArchiveDuration!])
    },
})
import { BaseChannel, ThreadOnlyChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$forumDefaultThreadSlowmode",
    version: "2.2.0",
    description: "Returns the default slowmode for threads of a forum",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to get default slowmode from",
            rest: false,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isThreadOnly(),
            required: true
        },
    ],
    output: ArgType.Number,
    execute(ctx, [chan]) {
        return this.success((chan as ThreadOnlyChannel)?.defaultThreadRateLimitPerUser)
    },
})
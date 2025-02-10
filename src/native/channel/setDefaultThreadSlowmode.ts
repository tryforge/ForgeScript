import { BaseChannel, SortOrderType, ThreadOnlyChannel } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$setDefaultThreadSlowmode",
    version: "2.2.0",
    description: "Sets a forum's default slowmode for posts",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The forum to modify",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isThreadOnly()
        },
        {
            name: "seconds",
            description: "The new default slowmode",
            rest: false,
            required: true,
            type: ArgType.Number,
        },
        {
            name: "reason",
            description: "Reason for modifying default slowmode",
            rest: false,
            type: ArgType.String
        }
    ],
    output: ArgType.Boolean,
    async execute(ctx, [ chan, seconds, reason ]) {
        return this.success(!!(await (chan as ThreadOnlyChannel).setDefaultThreadRateLimitPerUser(seconds, reason || undefined).catch(ctx.noop)))
    },
})
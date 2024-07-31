import { BaseChannel, ThreadChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"
import noop from "../../functions/noop"

export default new NativeFunction({
    name: "$deleteThread",
    version: "1.5.0",
    description: "Deletes a thread, returns bool",
    brackets: true,
    unwrap: true,
    output: ArgType.Boolean,
    args: [
        {
            name: "channel ID",
            description: "The thread to deleteive",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isThread(),
        },
        {
            name: "reason",
            description: "The reason to archive this thread",
            rest: false,
            type: ArgType.String,
        },
    ],
    async execute(ctx, [channel, reason]) {
        const thread = channel as ThreadChannel

        const success = await thread.delete(reason || undefined).catch(ctx.noop)

        return this.success(!!success)
    },
})

import { BaseChannel, ThreadChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"
import noop from "../../functions/noop"

export default new NativeFunction({
    name: "$unarchiveThread",
    version: "1.0.0",
    description: "Unarchives a thread, returns bool",
    brackets: true,
    unwrap: true,
    output: ArgType.Boolean,
    args: [
        {
            name: "channel ID",
            description: "The thread to unarchive",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isThread(),
        },
        {
            name: "reason",
            description: "The reason to unarchive this thread",
            rest: false,
            type: ArgType.String,
        },
    ],
    async execute(ctx, [channel, reason]) {
        const thread = channel as ThreadChannel

        const success = await thread.setArchived(false, reason || undefined).catch(ctx.noop)

        return this.success(!!success)
    },
})

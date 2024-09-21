import { BaseChannel, ThreadChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"
import noop from "../../functions/noop"

export default new NativeFunction({
    name: "$lockThread",
    version: "1.5.0",
    aliases: ["$lockPost"],
    description: "Locks a thread, returns bool",
    brackets: false,
    unwrap: true,
    output: ArgType.Boolean,
    args: [
        {
            name: "channel ID",
            description: "The thread to lock",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isThread(),
        },
        {
            name: "reason",
            description: "The reason to lock this thread",
            rest: false,
            type: ArgType.String,
        },
    ],
    async execute(ctx, [channel, reason]) {
        const thread = (channel ?? ctx.channel) as ThreadChannel
        if (!thread.isThread()) return this.success(false)

        const success = await thread.setLocked(true, reason || undefined).catch(ctx.noop)

        return this.success(!!success)
    },
})
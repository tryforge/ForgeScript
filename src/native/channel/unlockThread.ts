import { BaseChannel, ThreadChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"
import noop from "../../functions/noop"

export default new NativeFunction({
    name: "$unlockThread",
    version: "1.5.0",
    aliases: ["$unlockPost"],
    description: "Unlocks a thread, returns bool",
    brackets: false,
    unwrap: true,
    output: ArgType.Boolean,
    args: [
        {
            name: "channel ID",
            description: "The thread to unlock",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isThread(),
        },
        {
            name: "reason",
            description: "The reason to unlock this thread",
            rest: false,
            type: ArgType.String,
        },
    ],
    async execute(ctx, [channel, reason]) {
        const thread = (channel ?? ctx.channel) as ThreadChannel

        const success = await thread.setLocked(false, reason || undefined).catch(ctx.noop)

        return this.success(!!success)
    },
})
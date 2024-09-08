import { BaseChannel, ThreadChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"
import noop from "../../functions/noop"

export default new NativeFunction({
    name: "$threadTotalMessagesSent",
    version: "1.5.0",
    description: "Returns the total count of sent messages in a thread",
    aliases: [
        "$threadTotalMessagesCount"
    ],
    brackets: false,
    unwrap: true,
    output: ArgType.Number,
    args: [
        {
            name: "channel ID",
            description: "The thread to pull data from",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isThread(),
        }
    ],
    async execute(ctx, [channel]) {
        const thread = (channel ?? ctx.channel) as ThreadChannel
        return this.success(thread.totalMessageSent ?? 0)
    },
})
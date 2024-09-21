import { BaseChannel, ThreadChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$threadStarterMessageID",
    version: "1.5.0",
    description: "Returns the id of the message that started this thread",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The thread to get its starter message id",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isThread(),
        }
    ],
    output: ArgType.Message,
    async execute(ctx, [channel]) {
        const thread = (channel ?? ctx.channel) as ThreadChannel
        if (!thread.isThread()) return this.success()

        const message = await thread.fetchStarterMessage().catch(ctx.noop)
        
        return this.success(message?.id)
    },
})
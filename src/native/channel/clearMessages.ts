import { BaseChannel, TextChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"
import splitNumber from "../../functions/splitNumber"
import noop from "../../functions/noop"

export default new NativeFunction({
    name: "$clearMessages",
    version: "1.0.0",
    description: "Clears x amount of messages from a channel, returns the number of messages deleted",
    unwrap: true,
    output: ArgType.Number,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to clear messages on",
            required: true,
            rest: false,
            type: ArgType.Channel,
            check: (x: BaseChannel) => "messages" in x,
        },
        {
            name: "amount",
            description: "The amount of messages to delete",
            rest: false,
            required: true,
            type: ArgType.Number,
        },
        {
            name: "delete pinned",
            description: "Whether to delete pinned messages",
            rest: false,
            type: ArgType.Boolean,
        },
        {
            name: "delete bots",
            description: "Whether to delete messages of bots",
            rest: false,
            type: ArgType.Boolean,
        },
    ],
    async execute(ctx, [channel, amount, pinned, bots]) {
        let count = 0

        for (const n of splitNumber(amount, 100)) {
            const messages = await (channel as TextChannel).messages.fetch({ limit: n }).catch(ctx.noop)
            if (!messages) break

            const col = await (channel as TextChannel)
                .bulkDelete(
                    messages.filter(msg => {
                        if (pinned === false && msg.pinned) return false
                        if (bots === false && msg.author.bot) return false
                        return true
                    }),
                    true
                )
                .catch(() => null)

            if (col) count += col.size
        }

        return this.success(count)
    },
})
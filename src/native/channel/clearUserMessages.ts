import { BaseChannel, TextChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"
import splitNumber from "../../functions/splitNumber"
import noop from "../../functions/noop"

export default new NativeFunction({
    name: "$clearUserMessages",
    version: "1.0.0",
    description: "Clears x amount of messages from a channel of given user, returns the number of messages deleted",
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
            name: "user ID",
            description: "The user to delete their messages",
            required: true,
            rest: false,
            type: ArgType.User,
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
    ],
    async execute(ctx, [channel, user, amount, pinned]) {
        let count = 0

        for (const n of splitNumber(amount, 100)) {
            const messages = await (channel as TextChannel).messages.fetch({ limit: n }).catch(ctx.noop)
            if (!messages) break

            const col = await (channel as TextChannel)
                .bulkDelete(
                    messages.filter(msg => {
                        if (pinned === false && msg.pinned) return false
                        return !!(msg.author.id === user.id)
                    }),
                    true
                )
                .catch(() => null)

            if (!col) break

            count += col.size
        }

        return this.success(count)
    },
})
import { BaseChannel, TextChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"
import splitNumber from "../functions/splitNumber"
import noop from "../functions/noop"

export default new NativeFunction({
    name: "$clearUserMessages",
    category: "unknown",
    version: "1.0.0",
    description: "Clears x amount of messages from a channel of given user, returns the number of messages deleted",
    unwrap: true,
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
    ],
    async execute(_, [channel, user, amount]) {
        let count = 0

        for (const n of splitNumber(amount, 100)) {
            const messages = await (channel as TextChannel).messages.fetch({ limit: n }).catch(noop)
            if (!messages) break

            const col = await (channel as TextChannel)
                .bulkDelete(
                    messages.filter((x) => x.author.id === user.id),
                    true
                )
                .catch(noop)

            if (!col) break

            count += col.size
        }

        return this.success(count)
    },
})

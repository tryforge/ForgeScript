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
    ],
    async execute(_, [channel, amount]) {
        let count = 0

        for (const n of splitNumber(amount, 100)) {
            const col = await (channel as TextChannel).bulkDelete(n, true).catch(noop)
            if (!col || !col.size) break
            count += col.size
        }

        return this.success(count)
    },
})

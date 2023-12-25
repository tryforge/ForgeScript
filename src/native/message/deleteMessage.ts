import { BaseChannel, TextChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"
import noop from "../../functions/noop"

export default new NativeFunction({
    name: "$deleteMessage",
    category: "message",
    version: "1.0.0",
    brackets: true,
    unwrap: true,
    description: "Delete given message ids, returns the count of messages deleted",
    args: [
        {
            name: "channel ID",
            description: "The channel to delete this message from",
            rest: false,
            required: true,
            check: (i: BaseChannel) => i.isTextBased(),
            type: ArgType.Channel,
        },
        {
            name: "messages",
            description: "The messages to delete",
            rest: true,
            required: true,
            pointer: 0,
            type: ArgType.Message,
        },
    ],
    async execute(_, [channel, messages]) {
        if (!messages.length) return this.success(0)

        if (messages.length === 1) {
            return this.success(
                // @ts-ignore
                !!(await messages[0].delete().catch(noop)) + false
            )
        }

        const col =
            (await (channel as TextChannel)
                .bulkDelete(messages, true)
                .then((x) => x.size)
                .catch(noop)) ?? 0
        return this.success(col)
    },
})

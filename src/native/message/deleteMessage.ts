import { BaseChannel, TextChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"
import noop from "../../functions/noop"

export default new NativeFunction({
    name: "$deleteMessage",
    version: "1.0.0",
    brackets: true,
    unwrap: true,
    output: ArgType.Number,
    aliases: [
        "$deleteMessages"
    ],
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
            description: "The message ids to delete",
            rest: true,
            required: true,
            pointer: 0,
            type: ArgType.String,
        },
    ],
    async execute(ctx, [channel, messages]) {
        const ch = (channel as TextChannel)
        if (!messages.length) return this.success(0)

        if (messages.length === 1) {
            return this.success(
                // @ts-ignore
                !!(await ch.messages.delete(messages[0]).catch(ctx.noop)) + 0
            )
        }

        const col =
            (await (channel as TextChannel)
                .bulkDelete(messages, true)
                .then((x) => x.size)
                .catch(ctx.noop)) ?? 0
        return this.success(col)
    },
})

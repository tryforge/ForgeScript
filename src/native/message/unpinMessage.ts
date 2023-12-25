import { BaseChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"
import { noop } from "lodash"

export default new NativeFunction({
    name: "$unpinMessage",
    category: "message",
    version: "1.1.0",
    description: "Unpins a message from a channel, returns bool",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to pull message from",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isTextBased()
        },
        {
            name: "message ID",
            description: "The message to unpin",
            rest: false,
            required: true,
            pointer: 0,
            type: ArgType.Message
        }
    ],
    async execute(ctx, [, m ]) {
        const msg = m ?? ctx.message
        return this.success(
            !!(await msg.unpin().catch(noop))
        )
    },
})
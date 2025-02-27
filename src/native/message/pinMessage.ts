import { BaseChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"
import noop from "../../functions/noop"

export default new NativeFunction({
    name: "$pinMessage",
    version: "1.1.0",
    description: "Pins a message in a channel, returns bool",
    brackets: false,
    output: ArgType.Boolean,
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
            description: "The message to pin",
            rest: false,
            required: true,
            pointer: 0,
            type: ArgType.Message
        }
    ],
    async execute(ctx, [, m ]) {
        return this.success(!!(await (m ?? ctx.message)?.pin().catch(ctx.noop)))
    },
})
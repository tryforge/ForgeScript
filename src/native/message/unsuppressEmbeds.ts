import { BaseChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$unsuppressEmbeds",
    version: "1.5.0",
    description: "Unsuppresses embeds on a message, returns bool",
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
            description: "The message to unsuppress embeds on",
            rest: false,
            required: true,
            pointer: 0,
            type: ArgType.Message
        }
    ],
    output: ArgType.Boolean,
    async execute(ctx, [, message]) {
        return this.success(!!(await (message ?? ctx.message)?.suppressEmbeds(false).catch(ctx.noop)))
    },
})
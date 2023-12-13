import { TextBasedChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"
import noop from "../functions/noop"

export default new NativeFunction({
    name: "$deleteAllMessageReactions",
    version: "1.0.0",
    description: "Deletes all reactions from a message, returns bool",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "channel ID",
            description: "The channel the message is located",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: TextBasedChannel) => i.isTextBased(),
        },
        {
            name: "message ID",
            description: "The message to remove reactions from",
            rest: false,
            type: ArgType.Message,
            pointer: 0,
            required: true,
        },
    ],
    async execute(ctx, [, message]) {
        return this.success(!!(await (message ?? ctx.message)?.reactions.removeAll().catch(noop)))
    },
})

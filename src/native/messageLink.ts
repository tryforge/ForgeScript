import { BaseChannel, Message } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$messageLink",
    version: "1.0.0",
    description: "Retrieves a message url",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "channel ID",
            rest: false,
            required: true,
            description: "The channel to get the message from",
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isTextBased(),
        },
        {
            name: "message ID",
            description: "The message to get its url",
            rest: false,
            type: ArgType.Message,
            pointer: 0,
            required: true,
        },
    ],
    execute(ctx, [channel, message]) {
        const msg = message ?? ctx.message
        return Return.success(msg?.url)
    },
})

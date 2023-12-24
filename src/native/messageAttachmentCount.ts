import { BaseChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$messageAttachmentCount",
    category: "unknown",
    version: "1.4.0",
    description: "Retrieve the amount of attachments in this message",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            rest: false,
            required: true,
            description: "The channel to pull message from",
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isTextBased(),
        },
        {
            name: "message ID",
            pointer: 0,
            description: "The message to get its attachment count",
            rest: false,
            required: true,
            type: ArgType.Message,
        }
    ],
    execute(ctx, [, message]) {
        return this.success((message ?? ctx.message)?.attachments.size)
    },
})

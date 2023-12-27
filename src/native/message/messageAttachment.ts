import { BaseChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$messageAttachment",
    version: "1.4.0",
    description: "Retrieves an attachment from this message",
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
            description: "The message to get its attachments",
            rest: false,
            required: true,
            type: ArgType.Message,
        },
        {
            name: "index",
            rest: false,
            description: "The index of the attachment",
            type: ArgType.Number,
            required: true
        }
    ],
    execute(ctx, [, message, index]) {
        return this.success((message ?? ctx.message)?.attachments.at(index))
    },
})

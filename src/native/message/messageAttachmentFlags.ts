import { AttachmentFlags, BaseChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"
import array from "../../functions/array"

export default new NativeFunction({
    name: "$messageAttachmentFlags",
    version: "1.5.0",
    description: "Returns the flags of an attachment from this message",
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
            description: "The message to get its attachment flags",
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
        },
        {
            name: "separator",
            description: "The separator to use for every flag",
            type: ArgType.String,
            required: false,
            rest: false,
        },
    ],
    output: array(AttachmentFlags),
    execute(ctx, [, message, index, sep]) {
        return this.success((message ?? ctx.message)?.attachments.at(index ?? 0)?.flags?.toArray().join(sep ?? ", "))
    },
})
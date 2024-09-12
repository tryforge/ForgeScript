import { BaseChannel, MessageType } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$messageEditedAt",
    version: "1.5.0",
    output: ArgType.Number,
    description: "Returns the edited timestamp of the message",
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
            description: "The message to get its edited timestamp",
            rest: false,
            type: ArgType.Message,
            pointer: 0,
            required: true,
        },
    ],
    execute(ctx, [, message]) {
        return this.success((message ?? ctx.message)?.editedTimestamp)
    },
})

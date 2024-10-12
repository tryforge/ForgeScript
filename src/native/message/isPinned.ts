import { BaseChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$isPinned",
    version: "1.5.0",
    description: "Returns whether the message is pinned",
    aliases: [
        "$isMessagePinned",
        "$messagePinned"
    ],
    unwrap: true,
    brackets: false,
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
            description: "The message to check if its pinned",
            rest: false,
            required: true,
            type: ArgType.Message,
        }
    ],
    output: ArgType.Boolean,
    execute(ctx, [, message]) {
        return this.success((message ?? ctx.message)?.pinned ?? false)
    },
})
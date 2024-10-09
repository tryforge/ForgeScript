import { BaseChannel, MessageType } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$messageType",
    version: "1.0.0",
    description: "Returns the message type",
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
            description: "The message to get its type",
            rest: false,
            required: true,
            type: ArgType.Message,
        }
    ],
    output: MessageType,
    execute(ctx, [, message]) {
        return this.success(MessageType[(message ?? ctx.message)?.type!])
    },
})
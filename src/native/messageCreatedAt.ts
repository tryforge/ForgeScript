import { BaseChannel, MessageType } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$messageCreatedAt",
    version: "1.0.2",
    description: "Returns the timestamp of the message",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "channel ID",
            rest: false,
            required: true,
            description: "The channel to get the message from",
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isTextBased()
        },
        {
            name: "message ID",
            description: "The message to get its timestamp",
            rest: false,
            type: ArgType.Message,
            pointer: 0,
            required: true
        }
    ],
    execute(ctx, [, message ]) {
        return Return.success(MessageType[(message ?? ctx.message)?.createdTimestamp!])
    },
})
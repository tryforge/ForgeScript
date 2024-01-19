import { BaseChannel } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$isChannelMentioned",
    version: "1.3.0",
    description: "Returns whether a channel was mentioned in this message",
    unwrap: true,
    brackets: true,
    output: ArgType.Boolean,
    args: [
        {
            name: "channel ID",
            rest: false,
            description: "Channel to pull the message from",
            check: (i: BaseChannel) => i.isTextBased(),
            required: true,
            type: ArgType.Channel
        },
        {
            name: "message ID",
            rest: false,
            required: true,
            type: ArgType.Message,
            pointer: 0,
            description: "The message to get mentions from"
        },
        {
            name: "channel ID",
            rest: false,
            required: true,
            type: ArgType.Channel,
            description: "The entity to check for mentions"
        }
    ],
    execute(ctx, [, message, ch ]) {
        return this.success(message.mentions.channels.has(ch.id))
    },
})
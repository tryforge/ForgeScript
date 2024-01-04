import { BaseChannel } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$isUserMentioned",
    version: "1.3.0",
    description: "Returns whether an user was mentioned in this message",
    unwrap: true,
    output: ArgType.Boolean,
    brackets: true,
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
            name: "user ID",
            rest: false,
            required: true,
            type: ArgType.User,
            description: "The entity to check for mentions"
        }
    ],
    execute(ctx, [, message, user ]) {
        return this.success(message.mentions.users.has(user.id))
    },
})
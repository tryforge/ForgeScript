import { BaseChannel } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$isRoleMentioned",
    version: "1.3.0",
    description: "Returns whether a role was mentioned in this message",
    unwrap: true,
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
            name: "role ID",
            rest: false,
            required: true,
            type: ArgType.String,
            description: "The entity to check for mentions"
        }
    ],
    execute(ctx, [, message, r ]) {
        return this.success(message.mentions.roles.has(r))
    },
})
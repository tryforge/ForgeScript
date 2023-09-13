import { TextBasedChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"
import noop from "../functions/noop"

export default new NativeFunction({
    name: "$deleteUserMessageReaction",
    version: "1.0.6",
    description: "Deletes user emoji reaction from a message, returns bool",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The channel the message is located",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: TextBasedChannel) => i.isTextBased()
        },
        {
            name: "message ID",
            description: "The message to remove user emoji reaction",
            rest: false,
            type: ArgType.Message,
            pointer: 0,
            required: true
        },
        {
            name: "emoji",
            description: "The message reaction to remove user from",
            rest: false,
            required: true,
            pointer: 1,
            type: ArgType.Reaction
        },
        {
            name: "user ID",
            description: "The user to delete its reaction",
            required: true,
            rest: false,
            type: ArgType.User
        }
    ],
    async execute(ctx, [ ,, emoji, user ]) {
        return Return.success(
            !!(await emoji.users.remove(user).catch(noop))
        )
    },
})
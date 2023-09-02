import { TextBasedChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"
import noop from "../functions/noop"

export default new NativeFunction({
    name: "$addMessageReactions",
    version: "1.0.0",
    description: "Adds reactions to a message, returns amount of emojis successfully reacted",
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
            description: "The message to add reactions to",
            rest: false,
            type: ArgType.Message,
            pointer: 0,
            required: true
        },
        {
            name: "emojis",
            description: "The emojis to react with",
            rest: true,
            type: ArgType.String,
            required: true
        }
    ],
    async execute(ctx, [ channel, message, emojis ]) {
        let count = 0

        for (const emoji of emojis) {
            const success = await message.react(emoji).catch(noop)
            if (success) count++
        }

        return Return.success(count)
    },
})
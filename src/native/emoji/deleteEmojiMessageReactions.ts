import { TextBasedChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"
import noop from "../../functions/noop"

export default new NativeFunction({
    name: "$deleteEmojiMessageReactions",
    version: "1.0.0",
    description: "Deletes all emoji reactions from a message, returns amount of reaction emojis successfully deleted",
    unwrap: true,
    brackets: true,
    output: ArgType.Number,
    args: [
        {
            name: "channel ID",
            description: "The channel the message is located",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: TextBasedChannel) => i.isTextBased(),
        },
        {
            name: "message ID",
            description: "The message to remove emoji reactions from",
            rest: false,
            type: ArgType.Message,
            pointer: 0,
            required: true,
        },
        {
            name: "emojis",
            description: "The emojis to delete from this message",
            required: true,
            pointer: 1,
            rest: true,
            type: ArgType.Reaction,
        },
    ],
    async execute(_, [, , emojis]) {
        let count = 0

        for (const emoji of emojis) {
            const success = await emoji.remove().catch(noop)
            if (success) count++
        }

        return this.success(count)
    },
})

import { BaseChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"
import array from "../../functions/array"

const EmojiRegex = /<a?:\w+:(\d+)>|([\p{Emoji_Presentation}\p{Extended_Pictographic}])/gu

export default new NativeFunction({
    name: "$messageEmojis",
    version: "2.4.0",
    description: "Retrieves all emojis of this message",
    brackets: false,
    unwrap: true,
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
            description: "The message to get its emojis",
            rest: false,
            required: true,
            type: ArgType.Message,
        },
        {
            name: "separator",
            rest: false,
            description: "The separator to use for every emoji",
            type: ArgType.String,
        },
        {
            name: "return ids",
            rest: false,
            description: "Whether to return the emoji ids, excludes unicode emojis",
            type: ArgType.Boolean,
        },
    ],
    output: array<ArgType.Emoji>(),
    execute(ctx, [, message, sep, returnIDs]) {
        return this.success([...(message ?? ctx.message)?.content.matchAll(EmojiRegex) ?? []].map((x) => x[returnIDs ? 1 : 0]).filter(Boolean).join(sep ?? ", "))
    },
})
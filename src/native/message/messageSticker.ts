import { BaseChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"
import array from "../../functions/array"

export default new NativeFunction({
    name: "$messageSticker",
    version: "1.4.0",
    output: ArgType.Sticker,
    description: "Retrieves a sticker url of this message",
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
            description: "The message to get its stickers",
            rest: false,
            required: true,
            type: ArgType.Message,
        },
        {
            name: "index",
            rest: false,
            required: true,
            description: "The index to get sticker",
            type: ArgType.Number,
        }
    ],
    execute(ctx, [, message, index]) {
        return this.success((message ?? ctx.message)?.stickers.at(index)?.url)
    },
})

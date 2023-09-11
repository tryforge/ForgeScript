import { BaseChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$stickers",
    version: "1.0.3",
    description: "Retrieve a sticker url from a message with given index",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            rest: false,
            required: true,
            description: "The channel to pull message from",
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isTextBased()
        },
        {
            name: "message ID",
            pointer: 0,
            description: "The message to get its stickers",
            rest: false,
            required: true,
            type: ArgType.Message
        },
        {
            name: "index",
            rest: false,
            description: "The index to get this sticker",
            type: ArgType.Number
        }
    ],
    execute(ctx, [, message, index ]) {
        index ??= 1
        return Return.success(
            (message ?? ctx.message)?.stickers.at(index )?.url
        )
    },
})
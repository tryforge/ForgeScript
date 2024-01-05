import { BaseChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"
import array from "../../functions/array"

export default new NativeFunction({
    name: "$messageStickers",
    version: "1.4.0",
    aliases: [
        "$stickers"
    ],
    output: array<ArgType.GuildSticker>(),
    description: "Retrieves all stickers s of this message",
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
            name: "separator",
            rest: false,
            description: "The separator to use for every sticker",
            type: ArgType.String,
        }
    ],
    execute(ctx, [, message, sep]) {
        return this.success((message ?? ctx.message)?.stickers.map(x => x.url).join(sep ?? ", "))
    },
})

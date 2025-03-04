import { BaseChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"
import array from "../../functions/array"

export enum StickerReturnType {
    id = "id",
    url = "url"
}

export default new NativeFunction({
    name: "$messageStickers",
    version: "1.4.0",
    aliases: [
        "$stickers"
    ],
    output: array<ArgType.Sticker>(),
    description: "Retrieves all stickers of this message",
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
        },
        {
            name: "type",
            rest: false,
            description: "The type to return, default is url",
            type: ArgType.Enum,
            enum: StickerReturnType
        }
    ],
    execute(ctx, [, message, sep, type]) {
        type ??= StickerReturnType.url
        return this.success((message ?? ctx.message)?.stickers.map(x => x[type!]).join(sep ?? ", "))
    },
})
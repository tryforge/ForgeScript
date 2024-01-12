import { StickerFormatType } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$stickerFormat",
    version: "1.4.0",
    description: "Returns a sticker's format",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "sticker ID",
            description: "The sticker to get format of",
            rest: false,
            required: true,
            type: ArgType.Sticker
        }
    ],
    output: StickerFormatType,
    execute(ctx, [ s ]) {
        s ??= ctx.sticker!
        return this.success(StickerFormatType[s?.format])
    },
})
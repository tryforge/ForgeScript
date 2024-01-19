import { StickerFormatType, StickerType } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$stickerType",
    version: "1.4.0",
    description: "Returns the sticker's type",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "sticker ID",
            description: "The sticker to get type of",
            rest: false,
            required: true,
            type: ArgType.Sticker
        }
    ],
    output: StickerType,
    execute(ctx, [ s ]) {
        s ??= ctx.sticker!
        return this.success(StickerType[s?.type!])
    },
})
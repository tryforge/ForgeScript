import { StickerFormatType } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$stickerAvailable",
    version: "1.4.0",
    description: "Returns whether a sticker is available",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "sticker ID",
            description: "The sticker to get availability of",
            rest: false,
            required: true,
            type: ArgType.Sticker
        }
    ],
    output: ArgType.Boolean,
    execute(ctx, [ s ]) {
        s ??= ctx.sticker!
        return this.success(s?.available)
    },
})
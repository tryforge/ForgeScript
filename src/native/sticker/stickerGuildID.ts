import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$stickerGuildID",
    version: "1.4.0",
    description: "Returns a sticker's guild id",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "sticker ID",
            description: "The sticker to pull guild of",
            rest: false,
            required: true,
            type: ArgType.Sticker
        }
    ],
    output: ArgType.Guild,
    execute(ctx, [ s ]) {
        s ??= ctx.sticker!
        return this.success(s?.guildId)
    },
})
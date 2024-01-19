import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$stickerTags",
    version: "1.4.0",
    description: "Returns a sticker's tags",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "sticker ID",
            description: "The sticker to pull tags of",
            rest: false,
            required: true,
            type: ArgType.Sticker
        }
    ],
    output: ArgType.String,
    execute(ctx, [ s ]) {
        s ??= ctx.sticker!
        return this.success(s?.tags)
    },
})
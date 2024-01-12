import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$stickerName",
    version: "1.4.0",
    description: "Returns a sticker name",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "sticker ID",
            description: "The sticker to pull name of",
            rest: false,
            required: true,
            type: ArgType.Sticker
        }
    ],
    output: ArgType.String,
    execute(ctx, [ s ]) {
        s ??= ctx.sticker!
        return this.success(s?.name)
    },
})
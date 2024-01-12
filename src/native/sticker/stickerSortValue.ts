import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$stickerSortValue",
    version: "1.4.0",
    description: "Returns a sticker's sort value",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "sticker ID",
            description: "The sticker to get sort value of",
            rest: false,
            required: true,
            type: ArgType.Sticker
        }
    ],
    output: ArgType.Number,
    execute(ctx, [ s ]) {
        s ??= ctx.sticker!
        return this.success(s?.sortValue)
    },
})
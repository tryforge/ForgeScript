import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$stickerID",
    version: "1.4.0",
    description: "Returns the sticker id",
    unwrap: false,
    output: ArgType.Sticker,
    execute(ctx) {
        return this.success(ctx.sticker?.id)
    },
})
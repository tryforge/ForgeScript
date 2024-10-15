import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$stickerRawData",
    version: "1.5.0",
    description: "Returns the raw data of a sticker",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "sticker ID",
            rest: false,
            required: true,
            description: "The sticker to get raw data from",
            type: ArgType.Sticker,
        },
    ],
    output: ArgType.Json,
    execute(ctx, [sticker]) {
        return this.successJSON(sticker.toJSON())
    },
})
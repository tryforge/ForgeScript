import { EmojiProperties, EmojiProperty } from "../../properties/emoji"
import { StickerProperties, StickerProperty } from "../../properties/sticker"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$newSticker",
    version: "1.4.0",
    description: "Retrieves new data from an event whose context was a sticker instance",
    brackets: true,
    unwrap: true,
    output: ArgType.Unknown,
    args: [
        {
            name: "property",
            description: "The property to pull",
            rest: false,
            type: ArgType.Enum,
            enum: StickerProperty,
            required: true,
        },
        {
            name: "separator",
            description: "The separator to use in case of array",
            rest: false,
            type: ArgType.String,
        },
    ],
    execute(ctx, [prop, sep]) {
        return this.success(StickerProperties[prop](ctx.states?.sticker?.new, sep))
    },
})

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sticker_1 = require("../../properties/sticker");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$oldSticker",
    version: "1.4.0",
    description: "Retrieves old data from an event whose context was a sticker instance",
    brackets: true,
    unwrap: true,
    output: structures_1.ArgType.Unknown,
    args: [
        {
            name: "property",
            description: "The property to pull",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: sticker_1.StickerProperty,
            required: true,
        },
        {
            name: "separator",
            description: "The separator to use in case of array",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    execute(ctx, [prop, sep]) {
        return this.success(sticker_1.StickerProperties[prop](ctx.states?.sticker?.old, sep));
    },
});
//# sourceMappingURL=oldSticker.js.map
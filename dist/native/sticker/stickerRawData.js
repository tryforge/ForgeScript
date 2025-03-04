"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$stickerRawData",
    version: "1.5.0",
    description: "Returns the raw data of a sticker",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "sticker ID",
            rest: false,
            required: true,
            description: "The sticker to get raw data from",
            type: structures_1.ArgType.Sticker,
        },
    ],
    output: structures_1.ArgType.Json,
    execute(ctx, [sticker]) {
        sticker ??= ctx.sticker;
        return this.successJSON(sticker?.toJSON());
    },
});
//# sourceMappingURL=stickerRawData.js.map
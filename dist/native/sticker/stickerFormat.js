"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$stickerFormat",
    version: "1.4.0",
    description: "Returns a sticker's format",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "sticker ID",
            description: "The sticker to get format of",
            rest: false,
            required: true,
            type: structures_1.ArgType.Sticker
        }
    ],
    output: discord_js_1.StickerFormatType,
    execute(ctx, [s]) {
        s ??= ctx.sticker;
        return this.success(discord_js_1.StickerFormatType[s?.format]);
    },
});
//# sourceMappingURL=stickerFormat.js.map
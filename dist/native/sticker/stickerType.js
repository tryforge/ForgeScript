"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$stickerType",
    version: "1.4.0",
    description: "Returns the sticker's type",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "sticker ID",
            description: "The sticker to get type of",
            rest: false,
            required: true,
            type: structures_1.ArgType.Sticker
        }
    ],
    output: discord_js_1.StickerType,
    execute(ctx, [s]) {
        s ??= ctx.sticker;
        return this.success(discord_js_1.StickerType[s?.type]);
    },
});
//# sourceMappingURL=stickerType.js.map
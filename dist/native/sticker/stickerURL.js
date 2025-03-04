"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$stickerURL",
    description: "Returns a sticker url",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "sticker ID",
            description: "The sticker to pull url of",
            rest: false,
            required: true,
            type: structures_1.ArgType.Sticker
        }
    ],
    output: structures_1.ArgType.String,
    execute(ctx, [s]) {
        s ??= ctx.sticker;
        return this.success(s?.url);
    },
});
//# sourceMappingURL=stickerURL.js.map
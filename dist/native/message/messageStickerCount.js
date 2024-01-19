"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$messageStickerCount",
    version: "1.4.0",
    output: structures_1.ArgType.Number,
    description: "Retrieves sticker count of this message",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            rest: false,
            required: true,
            description: "The channel to pull message from",
            type: structures_1.ArgType.Channel,
            check: (i) => i.isTextBased(),
        },
        {
            name: "message ID",
            pointer: 0,
            description: "The message to get its sticker count",
            rest: false,
            required: true,
            type: structures_1.ArgType.Message,
        }
    ],
    execute(ctx, [, message]) {
        return this.success((message ?? ctx.message)?.stickers.size);
    },
});
//# sourceMappingURL=messageStickerCount.js.map
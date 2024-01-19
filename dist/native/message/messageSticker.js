"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$messageSticker",
    version: "1.4.0",
    output: structures_1.ArgType.Sticker,
    description: "Retrieves a sticker url of this message",
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
            description: "The message to get its stickers",
            rest: false,
            required: true,
            type: structures_1.ArgType.Message,
        },
        {
            name: "index",
            rest: false,
            required: true,
            description: "The index to get sticker",
            type: structures_1.ArgType.Number,
        }
    ],
    execute(ctx, [, message, index]) {
        return this.success((message ?? ctx.message)?.stickers.at(index)?.url);
    },
});
//# sourceMappingURL=messageSticker.js.map
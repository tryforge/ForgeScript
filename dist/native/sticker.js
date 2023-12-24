"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$sticker",
    category: "unknown",
    version: "1.3.0",
    description: "Attach a sticker to the response",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "guild ID",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
            description: "The guild to get sticker from"
        },
        {
            name: "sticker ID",
            rest: false,
            required: true,
            type: structures_1.ArgType.GuildSticker,
            pointer: 0,
            description: "The sticker to use"
        }
    ],
    execute(ctx, [, sticker]) {
        ctx.container.stickers.push(sticker.id);
        return this.success();
    },
});
//# sourceMappingURL=sticker.js.map
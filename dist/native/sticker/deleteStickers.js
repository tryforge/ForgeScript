"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$deleteStickers",
    version: "1.0.0",
    brackets: true,
    unwrap: true,
    output: structures_1.ArgType.Number,
    description: "Delete given sticker ids, returns the count of stickers deleted",
    args: [
        {
            name: "guild ID",
            description: "The guild to delete stickers from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
        {
            name: "stickers",
            description: "The stickers to delete",
            rest: true,
            required: true,
            pointer: 0,
            type: structures_1.ArgType.String,
        },
    ],
    async execute(ctx, [g, stickers]) {
        let count = 0;
        for (let i = 0, len = stickers.length; i < len; i++) {
            const sticker = stickers[i];
            const success = await g.stickers.delete(sticker).then(x => true).catch(ctx.noop);
            if (success)
                count++;
        }
        return this.success(count);
    },
});
//# sourceMappingURL=deleteStickers.js.map
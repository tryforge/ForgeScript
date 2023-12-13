"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
const noop_1 = __importDefault(require("../functions/noop"));
exports.default = new structures_1.NativeFunction({
    name: "$deleteStickers",
    version: "1.0.0",
    brackets: true,
    unwrap: true,
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
            type: structures_1.ArgType.GuildSticker,
        },
    ],
    async execute(_, [, stickers]) {
        let count = 0;
        for (let i = 0, len = stickers.length; i < len; i++) {
            const sticker = stickers[i];
            const success = await sticker.delete().catch(noop_1.default);
            if (success)
                count++;
        }
        return this.success(count);
    },
});
//# sourceMappingURL=deleteStickers.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const array_1 = __importDefault(require("../../functions/array"));
exports.default = new structures_1.NativeFunction({
    name: "$messageStickers",
    version: "1.4.0",
    aliases: [
        "$stickers"
    ],
    output: (0, array_1.default)(),
    description: "Retrieves all stickers s of this message",
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
            name: "separator",
            rest: false,
            description: "The separator to use for every sticker",
            type: structures_1.ArgType.String,
        }
    ],
    execute(ctx, [, message, sep]) {
        return this.success((message ?? ctx.message)?.stickers.map(x => x.url).join(sep ?? ", "));
    },
});
//# sourceMappingURL=messageStickers.js.map
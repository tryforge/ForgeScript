"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StickerReturnType = void 0;
const structures_1 = require("../../structures");
const array_1 = __importDefault(require("../../functions/array"));
var StickerReturnType;
(function (StickerReturnType) {
    StickerReturnType["id"] = "id";
    StickerReturnType["url"] = "url";
})(StickerReturnType || (exports.StickerReturnType = StickerReturnType = {}));
exports.default = new structures_1.NativeFunction({
    name: "$messageStickers",
    version: "1.4.0",
    aliases: [
        "$stickers"
    ],
    output: (0, array_1.default)(),
    description: "Retrieves all stickers of this message",
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
        },
        {
            name: "type",
            rest: false,
            description: "The type to return, default is url",
            type: structures_1.ArgType.Enum,
            enum: StickerReturnType
        }
    ],
    execute(ctx, [, message, sep, type]) {
        type ??= StickerReturnType.url;
        return this.success((message ?? ctx.message)?.stickers.map(x => x[type]).join(sep ?? ", "));
    },
});
//# sourceMappingURL=messageStickers.js.map
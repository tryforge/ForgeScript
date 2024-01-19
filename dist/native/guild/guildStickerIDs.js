"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const array_1 = __importDefault(require("../../functions/array"));
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$guildStickerIDs",
    version: "1.3.0",
    unwrap: true,
    aliases: [
        "$serverStickerIDs"
    ],
    output: (0, array_1.default)(),
    brackets: false,
    description: "Returns every sticker id of the guild",
    args: [
        {
            name: "guild ID",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
            description: "The guild to get sticker ids from"
        },
        {
            name: "separator",
            description: "The separator to use for every sticker",
            rest: false,
            type: structures_1.ArgType.String
        }
    ],
    execute(ctx, [guild, sep]) {
        guild ??= ctx.guild;
        return this.success(guild?.stickers.cache.map(x => x.id).join(sep ?? ", "));
    },
});
//# sourceMappingURL=guildStickerIDs.js.map
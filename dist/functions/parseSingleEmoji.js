"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseSingleEmoji = void 0;
const discord_js_1 = require("discord.js");
const structures_1 = require("../structures");
function parseSingleEmoji(ctx, str) {
    if (!str)
        return null;
    const parsed = (0, discord_js_1.parseEmoji)(str);
    const id = structures_1.CompiledFunction.CDNIdRegex.exec(str)?.[2] ?? parsed?.id;
    const emoji = ctx.client.emojis.cache.get(id ?? str) ?? parsed;
    return emoji ? { id: emoji.id ?? null, name: emoji.id ? null : emoji.name } : null;
}
exports.parseSingleEmoji = parseSingleEmoji;
//# sourceMappingURL=parseSingleEmoji.js.map
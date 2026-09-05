"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseSingleEmoji = parseSingleEmoji;
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
//# sourceMappingURL=parseSingleEmoji.js.map
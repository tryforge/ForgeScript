"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$findEmoji",
    version: "1.0.0",
    description: "Finds an emoji",
    brackets: true,
    output: structures_1.ArgType.Emoji,
    args: [
        {
            name: "query",
            description: "The id, format or emoji name to find",
            rest: false,
            type: structures_1.ArgType.String,
            required: true,
        },
    ],
    unwrap: true,
    async execute(ctx, [q]) {
        const emojis = await ctx.fetchApplicationEmojis(true);
        const parsed = (0, discord_js_1.parseEmoji)(q);
        if (structures_1.CompiledFunction.IdRegex.test(q)) {
            const e = ctx.client.emojis.cache.get(q) || emojis?.get(q);
            if (e)
                return this.success(e.id);
        }
        const name = parsed?.name.toLowerCase();
        return this.success(ctx.client.emojis.cache.find((x) => x.id === q || x.name?.toLowerCase() === name || x.toString() === q)?.id || emojis?.find((x) => x.id === q || x.name?.toLowerCase() === name || x.toString() === q)?.id);
    },
});
//# sourceMappingURL=findEmoji.js.map
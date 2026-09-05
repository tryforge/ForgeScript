"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$guildEmojiExists",
    version: "2.5.0",
    description: "Returns whether an emoji id exists on a guild",
    unwrap: true,
    aliases: [
        "$serverEmojiExists"
    ],
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull emoji from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
        {
            name: "emoji ID",
            description: "The emoji to check for",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    output: structures_1.ArgType.Boolean,
    async execute(ctx, [guild, id]) {
        return this.success(structures_1.CompiledFunction.IdRegex.test(id) && guild.emojis.cache.has(id));
    },
});
//# sourceMappingURL=guildEmojiExists.js.map
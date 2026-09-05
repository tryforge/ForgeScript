"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$guildStickerExists",
    version: "2.5.0",
    description: "Returns whether a sticker id exists on a guild",
    unwrap: true,
    aliases: [
        "$serverStickerExists"
    ],
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull sticker from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
        {
            name: "sticker ID",
            description: "The sticker to check for",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    output: structures_1.ArgType.Boolean,
    async execute(ctx, [guild, id]) {
        return this.success(structures_1.CompiledFunction.IdRegex.test(id) && guild.stickers.cache.has(id));
    },
});
//# sourceMappingURL=guildStickerExists.js.map
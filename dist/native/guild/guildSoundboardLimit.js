"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$guildSoundboardLimit",
    version: "2.5.0",
    description: "Returns the soundboard sound limit of a guild",
    brackets: false,
    unwrap: true,
    aliases: [
        "$serverSoundboardLimit"
    ],
    args: [
        {
            name: "guild ID",
            description: "The guild to retrieve the data",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
    ],
    output: structures_1.ArgType.Number,
    execute(ctx, [guild]) {
        let tier = (guild ?? ctx.guild)?.premiumTier;
        return this.success(tier === 0
            ? 8
            : tier === 1
                ? 24
                : tier === 2
                    ? 36
                    : tier === 3
                        ? 48
                        : undefined);
    },
});
//# sourceMappingURL=guildSoundboardLimit.js.map
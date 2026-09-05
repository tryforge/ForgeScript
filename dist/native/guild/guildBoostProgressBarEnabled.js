"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$guildBoostProgressBarEnabled",
    version: "1.5.0",
    description: "Returns whether a guild has the boost progress bar enabled",
    aliases: [
        "$serverBoostProgressBarEnabled"
    ],
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to retrieve the data",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
    ],
    output: structures_1.ArgType.Boolean,
    execute(ctx, [guild]) {
        return this.success((guild ?? ctx.guild)?.premiumProgressBarEnabled);
    },
});
//# sourceMappingURL=guildBoostProgressBarEnabled.js.map
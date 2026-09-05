"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$guildSystemChannelID",
    version: "1.0.0",
    description: "Returns the system channel ID of a guild",
    aliases: [
        "$serverSystemChannelID"
    ],
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to retrieve the data",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
    ],
    output: structures_1.ArgType.Channel,
    execute(ctx, [guild]) {
        return this.success((guild ?? ctx.guild)?.systemChannelId);
    },
});
//# sourceMappingURL=guildSystemChannelID.js.map
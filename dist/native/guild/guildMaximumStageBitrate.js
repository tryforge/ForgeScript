"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$guildMaximumStageBitrate",
    version: "2.7.0",
    description: "Returns the maximum bitrate for stage channels of this guild",
    aliases: [
        "$serverMaximumStageBitrate"
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
    output: structures_1.ArgType.Number,
    execute(ctx, [guild]) {
        return this.success((guild ?? ctx.guild)?.maximumStageBitrate);
    },
});
//# sourceMappingURL=guildMaximumStageBitrate.js.map
"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$setBotGuildAvatar",
    version: "2.6.0",
    description: "Sets the bot avatar on a guild",
    brackets: true,
    unwrap: true,
    aliases: [
        "$setClientGuildAvatar"
    ],
    args: [
        {
            name: "guild ID",
            description: "The guild to set avatar on",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
        {
            name: "url",
            description: "The icon url",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    output: structures_1.ArgType.Boolean,
    async execute(ctx, [guild, url]) {
        return this.success(!!(await guild.members.editMe({ avatar: url }).catch(ctx.noop)));
    },
});
//# sourceMappingURL=setBotGuildAvatar.js.map
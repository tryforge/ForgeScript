"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$unban",
    version: "1.0.0",
    brackets: true,
    unwrap: true,
    aliases: [
        "$memberUnban",
        "$unbanMember"
    ],
    output: structures_1.ArgType.Boolean,
    description: "Unbans a user from a guild, returns bool",
    args: [
        {
            name: "guild ID",
            description: "The guild to unban user from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
        {
            name: "user ID",
            description: "The user to unban",
            rest: false,
            type: structures_1.ArgType.User,
            required: true,
        },
        {
            name: "reason",
            description: "The unban reason",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    async execute(ctx, [guild, user, reason]) {
        const unbanned = await guild.bans.remove(user, reason || ctx.reason).catch(ctx.noop);
        return this.success(!!unbanned);
    },
});
//# sourceMappingURL=unban.js.map
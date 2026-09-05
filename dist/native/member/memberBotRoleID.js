"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$memberBotRoleID",
    version: "2.6.0",
    description: "Returns the managed bot role of a member, only available for bots",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull member from",
            rest: false,
            type: structures_1.ArgType.Guild,
            required: true,
        },
        {
            name: "user ID",
            description: "The user to get the managed bot role from",
            rest: false,
            pointer: 0,
            type: structures_1.ArgType.Member,
            required: true,
        },
    ],
    output: structures_1.ArgType.Role,
    execute(ctx, [guild, user]) {
        return this.success(guild.roles.botRoleFor(user)?.id);
    },
});
//# sourceMappingURL=memberBotRoleID.js.map
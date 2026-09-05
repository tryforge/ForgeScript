"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$roleHasAnyPerms",
    version: "2.6.0",
    description: "Returns whether the role has any of the specified perms",
    aliases: [
        "$hasRoleAnyPerms"
    ],
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull the role from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
        {
            name: "role ID",
            description: "The role to get its perms",
            rest: false,
            required: true,
            type: structures_1.ArgType.Role,
            pointer: 0,
        },
        {
            name: "perms",
            description: "The perms to check for",
            rest: true,
            required: true,
            type: structures_1.ArgType.Enum,
            enum: discord_js_1.PermissionFlagsBits,
        },
    ],
    output: structures_1.ArgType.Boolean,
    execute(ctx, [, role, perms]) {
        return this.success(role.permissions.any(perms));
    },
});
//# sourceMappingURL=roleHasAnyPerms.js.map
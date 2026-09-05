"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$editRolePerms",
    version: "1.0.7",
    description: "Edits a role's permissions, returns boolean",
    aliases: ["$modifyRolePerms"],
    unwrap: true,
    output: structures_1.ArgType.Boolean,
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
            pointer: 0,
            type: structures_1.ArgType.Role,
            description: "The role to edit perms for",
            rest: false,
            required: true,
        },
        {
            name: "perms",
            description: "The new perms for the role, omit to clear perms",
            rest: true,
            type: structures_1.ArgType.Permission,
        },
    ],
    brackets: true,
    async execute(ctx, [, role, perms]) {
        return this.success(!!(await role.setPermissions(perms, ctx.reason).catch(ctx.noop)));
    },
});
//# sourceMappingURL=editRolePerms.js.map
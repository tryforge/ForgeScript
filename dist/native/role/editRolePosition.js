"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$editRolePosition",
    version: "1.0.7",
    description: "Edits a role's position, returns boolean",
    unwrap: true,
    brackets: true,
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
            description: "The role to edit position for",
            rest: false,
            required: true,
        },
        {
            name: "position",
            description: "The new position for the role",
            rest: false,
            type: structures_1.ArgType.Number,
            required: true,
        },
    ],
    async execute(ctx, [, role, pos]) {
        return this.success(!!(await role.setPosition(pos, { reason: ctx.reason }).catch(ctx.noop)));
    },
});
//# sourceMappingURL=editRolePosition.js.map
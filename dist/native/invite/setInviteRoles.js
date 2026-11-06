"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$setInviteRoles",
    version: "2.9.0",
    aliases: ["$setInviteRole"],
    description: "Sets the roles to give to users who join with the next created invite",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "roles",
            description: "The roles to give",
            type: structures_1.ArgType.Role,
            required: true,
            rest: true
        }
    ],
    execute(ctx, [roles]) {
        ctx.invite.roles = roles;
        return this.success();
    }
});
//# sourceMappingURL=setInviteRoles.js.map
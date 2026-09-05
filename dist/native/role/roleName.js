"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$roleName",
    version: "1.0.0",
    description: "Returns a role name with given id",
    brackets: false,
    unwrap: true,
    output: structures_1.ArgType.String,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull the role from",
            rest: false,
            type: structures_1.ArgType.Guild,
            required: true,
        },
        {
            name: "role ID",
            description: "The role to return its name",
            rest: false,
            type: structures_1.ArgType.Role,
            pointer: 0,
            required: true,
        },
    ],
    execute(ctx, [, role]) {
        return this.success((role ?? ctx.role)?.name);
    },
});
//# sourceMappingURL=roleName.js.map
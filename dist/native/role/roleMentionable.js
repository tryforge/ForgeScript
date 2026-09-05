"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$roleMentionable",
    version: "1.0.0",
    description: "Returns whether the role is mentionable",
    brackets: false,
    unwrap: true,
    output: structures_1.ArgType.Boolean,
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
            description: "The role to return its mentionable state",
            rest: false,
            type: structures_1.ArgType.Role,
            pointer: 0,
            required: true,
        },
    ],
    execute(ctx, [, role]) {
        return this.success((role ?? ctx.role)?.mentionable);
    },
});
//# sourceMappingURL=roleMentionable.js.map
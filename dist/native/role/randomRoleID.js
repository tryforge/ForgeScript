"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$randomRoleID",
    version: "1.5.0",
    description: "Returns a random role ID of a guild",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull the role from",
            rest: false,
            type: structures_1.ArgType.Guild,
            required: true,
        },
    ],
    output: structures_1.ArgType.Role,
    execute(ctx, [guild]) {
        return this.success((guild ?? ctx.guild)?.roles.cache.randomKey());
    },
});
//# sourceMappingURL=randomRoleID.js.map
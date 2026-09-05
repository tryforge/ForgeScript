"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$roleRawData",
    version: "1.5.0",
    description: "Returns the raw data of a role",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull role from",
            rest: false,
            type: structures_1.ArgType.Guild,
            required: true,
        },
        {
            name: "role ID",
            rest: false,
            required: true,
            description: "The role to get raw data from",
            type: structures_1.ArgType.Role,
            pointer: 0
        },
    ],
    output: structures_1.ArgType.Json,
    execute(ctx, [, role]) {
        return this.successJSON((role ?? ctx.role)?.toJSON());
    },
});
//# sourceMappingURL=roleRawData.js.map
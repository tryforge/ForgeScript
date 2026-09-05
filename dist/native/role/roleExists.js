"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$roleExists",
    version: "1.0.0",
    description: "Returns whether a role id exists",
    unwrap: true,
    brackets: true,
    output: structures_1.ArgType.Boolean,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull the role from",
            type: structures_1.ArgType.Guild,
            rest: false,
            required: true,
        },
        {
            name: "role ID",
            description: "The role to check for",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    async execute(ctx, [guild, id]) {
        return this.success(structures_1.CompiledFunction.IdRegex.test(id) && guild.roles.cache.has(id));
    },
});
//# sourceMappingURL=roleExists.js.map
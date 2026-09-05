"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$roleID",
    version: "1.0.0",
    description: "Returns a role id with given name",
    brackets: false,
    unwrap: true,
    output: structures_1.ArgType.Role,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull the role from",
            rest: false,
            type: structures_1.ArgType.Guild,
            required: true,
        },
        {
            name: "name",
            description: "The role name to return its id",
            rest: true,
            type: structures_1.ArgType.String,
            pointer: 0,
            required: true,
        },
    ],
    execute(ctx, [guild, args]) {
        if (this.hasFields) {
            const name = args.join(";");
            return this.success(guild.roles.cache.find((x) => x.name === name)?.id);
        }
        return this.success(ctx.role?.id);
    },
});
//# sourceMappingURL=roleID.js.map
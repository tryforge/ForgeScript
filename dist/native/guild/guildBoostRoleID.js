"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$guildBoostRoleID",
    version: "1.0.0",
    description: "Returns the server boost role id",
    brackets: false,
    aliases: [
        "$serverBoostRoleID"
    ],
    args: [
        {
            name: "guild ID",
            description: "The guild to retrieve the data",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
    ],
    output: structures_1.ArgType.Role,
    unwrap: true,
    execute(ctx, [guild]) {
        return this.success((guild ?? ctx.guild)?.roles.premiumSubscriberRole?.id);
    },
});
//# sourceMappingURL=guildBoostRoleID.js.map
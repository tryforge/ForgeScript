"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$userGuildEnabled",
    version: "2.5.0",
    description: "Returns whether the primary guild of a user is enabled",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "user ID",
            description: "The user to get its primary guild",
            required: true,
            rest: false,
            type: structures_1.ArgType.User,
        },
    ],
    output: structures_1.ArgType.Boolean,
    execute(ctx, [user]) {
        return this.success((user ?? ctx.user)?.primaryGuild?.identityEnabled);
    },
});
//# sourceMappingURL=userGuildEnabled.js.map
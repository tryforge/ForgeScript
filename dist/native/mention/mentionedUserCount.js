"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$mentionedUserCount",
    aliases: [
        "$mentionedUsersCount"
    ],
    output: structures_1.ArgType.Number,
    version: "1.3.0",
    description: "Returns the mentioned user count",
    unwrap: false,
    execute(ctx) {
        return this.success(ctx.message?.mentions.users.size);
    },
});
//# sourceMappingURL=mentionedUserCount.js.map
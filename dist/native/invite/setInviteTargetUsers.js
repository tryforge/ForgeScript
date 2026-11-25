"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$setInviteTargetUsers",
    version: "2.9.0",
    aliases: ["$setInviteTargetUser"],
    description: "Sets the users allowed to use the next created invite",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "users",
            description: "The users allowed to use the invite",
            type: structures_1.ArgType.User,
            required: true,
            rest: true
        }
    ],
    execute(ctx, [users]) {
        ctx.invite.targetUsers = users;
        return this.success();
    }
});
//# sourceMappingURL=setInviteTargetUsers.js.map
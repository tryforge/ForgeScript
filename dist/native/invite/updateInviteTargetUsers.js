"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$updateInviteTargetUsers",
    version: "2.9.0",
    aliases: ["$updateInviteTargetUser"],
    description: "Updates the users allowed to use an existing invite, returns bool",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "invite",
            description: "The invite to update",
            rest: false,
            required: true,
            type: structures_1.ArgType.Invite,
        },
        {
            name: "users",
            description: "The users allowed to use the invite",
            rest: true,
            required: true,
            type: structures_1.ArgType.User,
        },
    ],
    output: structures_1.ArgType.Boolean,
    async execute(ctx, [invite, users]) {
        return this.success(!!(await invite.updateTargetUsers(users).then(() => true).catch(ctx.noop)));
    },
});
//# sourceMappingURL=updateInviteTargetUsers.js.map
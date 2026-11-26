/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
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
            type: ArgType.Invite,
        },
        {
            name: "users",
            description: "The users allowed to use the invite",
            rest: true,
            required: true,
            type: ArgType.User,
        },
    ],
    output: ArgType.Boolean,
    async execute(ctx, [invite, users]) {
        return this.success(!!(await invite.updateTargetUsers(users).then(() => true).catch(ctx.noop)))
    },
})

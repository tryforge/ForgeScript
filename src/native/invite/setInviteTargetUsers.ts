/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
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
            type: ArgType.User,
            required: true,
            rest: true
        }
    ],
    execute(ctx, [users]) {
        ctx.invite.targetUsers = users
        return this.success()
    }
})
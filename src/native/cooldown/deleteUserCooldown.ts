/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$deleteUserCooldown",
    version: "1.5.0",
    description: "Deletes cooldown for given user id, binded to current command",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "user ID",
            description: "The id to delete its cooldown",
            rest: false,
            type: ArgType.String,
            required: true,
        },
    ],
    execute(ctx, [id]) {
        ctx.client.cooldowns.delete(ctx.client.cooldowns.identifier(ctx.cmd!.id, "user", id))
        return this.success()
    },
})

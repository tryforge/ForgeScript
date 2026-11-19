/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$getMemberCooldownTime",
    version: "1.5.0",
    description: "Retrieves current cooldown time in ms for given guild and user id, binded to current command",
    brackets: true,
    output: ArgType.Number,
    unwrap: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to get its cooldown",
            rest: false,
            type: ArgType.Guild,
            required: true,
        },
        {
            name: "user ID",
            description: "The user to get its cooldown",
            rest: false,
            type: ArgType.Member,
            required: true,
            pointer: 0,
        },
    ],
    execute(ctx, [guild, member]) {
        return this.success(
            ctx.client.cooldowns.getTimeLeft(ctx.client.cooldowns.identifier(ctx.cmd!.id, "member", guild.id, member.id))
        )
    },
})
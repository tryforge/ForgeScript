/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$getGuildCooldownTime",
    version: "1.5.0",
    description: "Retrieves current cooldown time in ms for given guild id, binded to current command",
    brackets: true,
    aliases: [
        "$getServerCooldownTime"
    ],
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
    ],
    execute(ctx, [guild]) {
        return this.success(
            ctx.client.cooldowns.getTimeLeft(ctx.client.cooldowns.identifier(ctx.cmd!.id, "guild", guild.id))
        )
    },
})
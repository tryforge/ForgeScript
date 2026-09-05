/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$unban",
    version: "1.0.0",
    brackets: true,
    unwrap: true,
    aliases: [
        "$memberUnban",
        "$unbanMember"
    ],
    output: ArgType.Boolean,
    description: "Unbans a user from a guild, returns bool",
    args: [
        {
            name: "guild ID",
            description: "The guild to unban user from",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "user ID",
            description: "The user to unban",
            rest: false,
            type: ArgType.User,
            required: true,
        },
        {
            name: "reason",
            description: "The unban reason",
            rest: false,
            type: ArgType.String,
        },
    ],
    async execute(ctx, [guild, user, reason]) {
        const unbanned = await guild.bans.remove(user, reason || ctx.reason).catch(ctx.noop)
        return this.success(!!unbanned)
    },
})

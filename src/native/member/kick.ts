/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$kick",
    version: "1.0.0",
    description:
        "Kicks a member from the guild, returns true or false depending on whether the action was successfully performed",
    unwrap: true,
    brackets: true,
    aliases: [
        "$kickMember",
        "$memberKick"
    ],
    output: ArgType.Boolean,
    args: [
        {
            name: "guild ID",
            description: "The guild to kick a member from",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "user ID",
            description: "The user to kick",
            rest: false,
            type: ArgType.Member,
            pointer: 0,
            required: true,
        },
        {
            name: "reason",
            description: "The reason to kick for",
            rest: false,
            type: ArgType.String,
        },
    ],
    async execute(ctx, [, member, reason]) {
        return this.success((await member.kick(reason || ctx.reason).catch(() => false)) !== false)
    },
})

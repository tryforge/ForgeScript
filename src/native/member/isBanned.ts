/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$isBanned",
    version: "1.0.0",
    brackets: true,
    unwrap: true,
    aliases: [
        "$memberIsBanned"
    ],
    output: ArgType.Boolean,
    description: "Returns whether this user is banned",
    args: [
        {
            name: "guild ID",
            description: "The guild to check bans on",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "user ID",
            description: "The user to check ban status for",
            rest: false,
            type: ArgType.User,
            required: true,
        },
    ],
    async execute(ctx, [guild, user]) {
        const isBanned = await guild.bans.fetch(user).catch(() => false)
        return this.success(!!isBanned)
    },
})
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$setGuildDiscoverySplash",
    version: "2.1.0",
    description: "Sets the discovery splash for a guild, returns bool",
    unwrap: true,
    aliases: [
        "$setServerDiscoverySplash"
    ],
    output: ArgType.Boolean,
    args: [
        {
            name: "guild ID",
            description: "The guild to set discovery splash for",
            rest: false,
            type: ArgType.Guild,
            required: true,
        },
        {
            name: "url",
            description: "The new discovery splash",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "reason",
            description: "The reason for this action",
            rest: false,
            type: ArgType.String,
        },
    ],
    brackets: true,
    async execute(ctx, [guild, icon, reason]) {
        return this.success((await guild.setDiscoverySplash(icon || null, reason || ctx.reason).catch(() => false)) !== false)
    },
})
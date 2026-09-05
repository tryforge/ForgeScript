/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { GuildExplicitContentFilter } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$setGuildExplicitContentFilter",
    version: "2.1.0",
    description: "Sets the explicit content filter for a guild, returns bool",
    unwrap: true,
    aliases: [
        "$setServerExplicitContentFilter"
    ],
    output: ArgType.Boolean,
    args: [
        {
            name: "guild ID",
            description: "The guild to set explicit content filter for",
            rest: false,
            type: ArgType.Guild,
            required: true,
        },
        {
            name: "filter",
            description: "The new explicit content filter",
            rest: false,
            type: ArgType.Enum,
            enum: GuildExplicitContentFilter
        },
        {
            name: "reason",
            description: "The reason for this action",
            rest: false,
            type: ArgType.String,
        },
    ],
    brackets: true,
    async execute(ctx, [guild, filter, reason]) {
        return this.success((await guild.setExplicitContentFilter(filter || null, reason || ctx.reason).catch(() => false)) !== false)
    },
})
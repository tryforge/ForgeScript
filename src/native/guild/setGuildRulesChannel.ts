/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { BaseChannel, ChannelType, TextChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$setGuildRulesChannel",
    version: "2.1.0",
    description: "Sets the rules channel for a guild, returns bool",
    unwrap: true,
    aliases: [
        "$setServerRulesChannel"
    ],
    output: ArgType.Boolean,
    args: [
        {
            name: "guild ID",
            description: "The guild to set rules channel for",
            rest: false,
            type: ArgType.Guild,
            required: true,
        },
        {
            name: "channel ID",
            description: "The new rules channel",
            rest: false,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.type === ChannelType.GuildText,
            pointer: 0
        },
        {
            name: "reason",
            description: "The reason for this action",
            rest: false,
            type: ArgType.String,
        },
    ],
    brackets: true,
    async execute(ctx, [guild, channel, reason]) {
        return this.success((await guild.setRulesChannel(channel as TextChannel || null, reason || ctx.reason).catch(() => false)) !== false)
    },
})
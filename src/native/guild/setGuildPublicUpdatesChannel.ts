/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { BaseChannel, ChannelType, TextChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$setGuildPublicUpdatesChannel",
    version: "2.1.0",
    description: "Sets the public updates channel for a guild, returns bool",
    unwrap: true,
    aliases: [
        "$setServerPublicUpdatesChannel"
    ],
    output: ArgType.Boolean,
    args: [
        {
            name: "guild ID",
            description: "The guild to set public updates channel for",
            rest: false,
            type: ArgType.Guild,
            required: true,
        },
        {
            name: "channel ID",
            description: "The new public updates channel",
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
        return this.success((await guild.setPublicUpdatesChannel(channel as TextChannel || null, reason || ctx.reason).catch(() => false)) !== false)
    },
})
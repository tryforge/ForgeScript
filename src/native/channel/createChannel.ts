/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { BaseChannel, CategoryChannel, ChannelType, GuildChannelCreateOptions } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$createChannel",
    version: "1.0.0",
    description: "Creates a channel in a guild, returns the channel id",
    unwrap: true,
    brackets: true,
    output: ArgType.Channel,
    args: [
        {
            name: "guild ID",
            description: "The guild to create this channel on",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "name",
            description: "The name for the channel",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "type",
            description: "The type of the channel, some are not supported",
            rest: false,
            type: ArgType.Enum,
            enum: ChannelType,
            required: true,
        },
        {
            name: "topic",
            description: "The topic for the channel",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "parent ID",
            description: "The parent id for the channel",
            rest: false,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.type === ChannelType.GuildCategory,
            pointer: 0,
        },
    ],
    async execute(ctx, [guild, name, type, topic, parent]) {
        const ch = await guild.channels
            .create({
                type: type as GuildChannelCreateOptions["type"],
                name,
                topic: topic || undefined,
                parent: parent as CategoryChannel,
                permissionOverwrites: ctx.permissionOverwrites,
                reason: ctx.reason
            })
            .catch(ctx.noop)
        return this.success(ch ? ch.id : undefined)
    },
})

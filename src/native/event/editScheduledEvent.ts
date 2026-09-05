/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { GuildScheduledEventEntityType } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$editScheduledEvent",
    version: "2.6.0",
    description: "Edits an existing scheduled event on a guild, returns bool",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to edit scheduled event on",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "event ID",
            description: "The scheduled event to edit",
            rest: false,
            required: true,
            type: ArgType.ScheduledEvent,
            pointer: 0,
        },
        {
            name: "name",
            description: "The new name for the scheduled event",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "description",
            description: "The new description for the scheduled event",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "type",
            description: "The new entity type for the scheduled event",
            rest: false,
            type: ArgType.Enum,
            enum: GuildScheduledEventEntityType,
        },
        {
            name: "start",
            description: "The new start time for the scheduled event",
            rest: false,
            type: ArgType.Date,
        },
        {
            name: "end",
            description: "The new end time for the scheduled event",
            rest: false,
            type: ArgType.Date,
        },
        {
            name: "cover",
            description: "The new cover image for the scheduled event",
            rest: false,
            type: ArgType.URL,
        },
    ],
    output: ArgType.Boolean,
    async execute(ctx, [, event, name, desc, type, start, end, cover]) {
        const edit = await event.edit({
            name: name || undefined,
            description: desc || undefined,
            entityType: type || undefined,
            scheduledStartTime: start || undefined,
            scheduledEndTime: end || undefined,
            image: cover || undefined,
            channel: ctx.scheduledEvent.channel,
            entityMetadata: ctx.scheduledEvent.entityMetadata,
            reason: ctx.reason
        }).catch(ctx.noop)

        ctx.clearScheduledEventOptions()

        return this.success(!!edit)
    },
})
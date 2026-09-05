"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$createScheduledEvent",
    version: "2.6.0",
    description: "Creates a new scheduled event on a guild, returns event id",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to create scheduled event on",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
        {
            name: "name",
            description: "The name of the scheduled event",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "description",
            description: "The description of the scheduled event",
            rest: false,
            type: structures_1.ArgType.String,
        },
        {
            name: "type",
            description: "The entity type of the scheduled event",
            rest: false,
            required: true,
            type: structures_1.ArgType.Enum,
            enum: discord_js_1.GuildScheduledEventEntityType,
        },
        {
            name: "start",
            description: "The start time of the scheduled event",
            rest: false,
            required: true,
            type: structures_1.ArgType.Date,
        },
        {
            name: "end",
            description: "The end time of the scheduled event",
            rest: false,
            type: structures_1.ArgType.Date,
        },
        {
            name: "cover",
            description: "The cover image of the scheduled event",
            rest: false,
            type: structures_1.ArgType.URL,
        },
    ],
    output: structures_1.ArgType.ScheduledEvent,
    async execute(ctx, [guild, name, desc, type, start, end, cover]) {
        const event = await guild.scheduledEvents.create({
            name,
            entityType: type,
            privacyLevel: discord_js_1.GuildScheduledEventPrivacyLevel.GuildOnly,
            scheduledStartTime: start,
            scheduledEndTime: end || undefined,
            description: desc || undefined,
            image: cover || undefined,
            channel: ctx.scheduledEvent.channel,
            entityMetadata: ctx.scheduledEvent.entityMetadata,
            reason: ctx.reason
        }).catch(ctx.noop);
        ctx.clearScheduledEventOptions();
        return this.success(event?.id);
    },
});
//# sourceMappingURL=createScheduledEvent.js.map
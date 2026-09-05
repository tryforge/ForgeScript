/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction, Return } from "../../structures"
import { ScheduledEventProperties, ScheduledEventProperty } from "../../properties/scheduledEvent"
import array from "../../functions/array"

export default new NativeFunction({
    name: "$guildScheduledEvents",
    version: "2.6.0",
    description: "Returns all scheduled events of a guild",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to get scheduled events from",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "property",
            description: "The property of the scheduled events to return",
            rest: false,
            type: ArgType.Enum,
            enum: ScheduledEventProperty
        },
        {
            name: "separator",
            description: "The separator to use for each property",
            rest: false,
            type: ArgType.String,
        },
    ],
    output: [
        ArgType.Json,
        array<ArgType.Unknown>()
    ],
    async execute(ctx, [ guild, prop, sep ]) {
        const events = await (guild ?? ctx.guild)?.scheduledEvents?.fetch().catch(ctx.noop)

        if (prop) return this.success(events?.map((x) => ScheduledEventProperties[prop](x)).join(sep ?? ", "))
        return this.successJSON(events)
    },
})
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction, Return } from "../../structures"
import { ScheduledEventProperties, ScheduledEventProperty } from "../../properties/scheduledEvent"

export default new NativeFunction({
    name: "$getScheduledEvent",
    version: "2.6.0",
    description: "Returns a scheduled event of a guild",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to get scheduled event from",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "event ID",
            description: "The scheduled event to get",
            rest: false,
            required: true,
            type: ArgType.ScheduledEvent,
            pointer: 0,
        },
        {
            name: "property",
            description: "The property of the scheduled event to return",
            rest: false,
            type: ArgType.Enum,
            enum: ScheduledEventProperty
        },
    ],
    output: [
        ArgType.Json,
        ArgType.Unknown
    ],
    execute(ctx, [, event, prop]) {
        if (prop) return this.success(ScheduledEventProperties[prop](event))
        return this.successJSON(event)
    },
})
"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const scheduledEvent_1 = require("../../properties/scheduledEvent");
exports.default = new structures_1.NativeFunction({
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
            type: structures_1.ArgType.Guild,
        },
        {
            name: "event ID",
            description: "The scheduled event to get",
            rest: false,
            required: true,
            type: structures_1.ArgType.ScheduledEvent,
            pointer: 0,
        },
        {
            name: "property",
            description: "The property of the scheduled event to return",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: scheduledEvent_1.ScheduledEventProperty
        },
    ],
    output: [
        structures_1.ArgType.Json,
        structures_1.ArgType.Unknown
    ],
    execute(ctx, [, event, prop]) {
        if (prop)
            return this.success(scheduledEvent_1.ScheduledEventProperties[prop](event));
        return this.successJSON(event);
    },
});
//# sourceMappingURL=getScheduledEvent.js.map
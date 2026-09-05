"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const scheduledEvent_1 = require("../../properties/scheduledEvent");
const array_1 = __importDefault(require("../../functions/array"));
exports.default = new structures_1.NativeFunction({
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
            type: structures_1.ArgType.Guild,
        },
        {
            name: "property",
            description: "The property of the scheduled events to return",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: scheduledEvent_1.ScheduledEventProperty
        },
        {
            name: "separator",
            description: "The separator to use for each property",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    output: [
        structures_1.ArgType.Json,
        (0, array_1.default)()
    ],
    async execute(ctx, [guild, prop, sep]) {
        const events = await (guild ?? ctx.guild)?.scheduledEvents?.fetch().catch(ctx.noop);
        if (prop)
            return this.success(events?.map((x) => scheduledEvent_1.ScheduledEventProperties[prop](x)).join(sep ?? ", "));
        return this.successJSON(events);
    },
});
//# sourceMappingURL=guildScheduledEvents.js.map
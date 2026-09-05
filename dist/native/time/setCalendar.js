"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const structures_2 = require("../../structures");
exports.default = new structures_2.NativeFunction({
    name: "$setCalendar",
    version: "1.5.0",
    description: "Sets the calendar for time functions",
    aliases: ["$calendar"],
    unwrap: true,
    brackets: true,
    experimental: true,
    args: [
        {
            name: "type",
            description: "The calendar type to use",
            rest: false,
            type: structures_2.ArgType.Enum,
            enum: structures_1.CalendarType,
            required: true,
        },
    ],
    execute(ctx, [type]) {
        ctx.calendar = type;
        return this.success();
    }
});
//# sourceMappingURL=setCalendar.js.map
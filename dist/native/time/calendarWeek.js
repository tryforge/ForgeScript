"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$calendarWeek",
    version: "1.5.0",
    description: "Returns the calendar week",
    unwrap: true,
    output: structures_1.ArgType.Number,
    execute: async function (ctx) {
        const date = new Date(new Date().toLocaleString("en-US", { timeZone: ctx.timezone, calendar: ctx.calendar }));
        if (ctx.calendar === structures_1.CalendarType.Iso8601) {
            const target = new Date(date.valueOf());
            const dayNr = (date.getDay() + 6) % 7;
            target.setDate(target.getDate() - dayNr + 3);
            const firstThursday = target.valueOf();
            target.setMonth(0, 1);
            if (target.getDay() !== 4) {
                target.setMonth(0, 1 + ((4 - target.getDay() + 7) % 7));
            }
            return this.success(1 + Math.ceil((firstThursday - target.valueOf()) / 604800000));
        }
        const start = new Date(date.getFullYear(), 0, 1);
        const days = (date.getTime() - start.getTime()) / 86400000;
        const week = Math.ceil((days + start.getDay() + 1) / 7);
        return this.success(week);
    }
});
//# sourceMappingURL=calendarWeek.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
function getWeekOfYear(date) {
    const start = new Date(date.getFullYear(), 0, 1);
    const days = (date.getTime() - start.getTime()) / 86400000;
    return Math.ceil((days + start.getDay() + 1) / 7);
}
exports.default = new structures_1.NativeFunction({
    name: "$calendarWeek",
    version: "1.5.0",
    description: "Returns the calendar week",
    unwrap: true,
    output: structures_1.ArgType.Number,
    execute: async function (ctx) {
        return this.success(getWeekOfYear(new Date(new Date().toLocaleString("en-US", { timeZone: ctx.timezone, calendar: ctx.calendar }))));
    }
});
//# sourceMappingURL=calendarWeek.js.map
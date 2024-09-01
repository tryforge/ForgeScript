"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
function getDayOfYear(date) {
    const start = new Date(date.getFullYear(), 0, 1);
    const diff = date.getTime() - start.getTime();
    const ms = 1000 * 60 * 60 * 24;
    return Math.floor(diff / ms) + 1;
}
exports.default = new structures_1.NativeFunction({
    name: "$calendarDay",
    version: "1.5.0",
    description: "Returns the calendar day",
    unwrap: true,
    output: structures_1.ArgType.Number,
    execute: async function (ctx) {
        return this.success(getDayOfYear(new Date(new Date().toLocaleString("en-US", { timeZone: ctx.timezone, calendar: ctx.calendar }))));
    }
});
//# sourceMappingURL=calendarDay.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
function getWeekOfMonth(date) {
    const day = date.getDate();
    return Math.floor((day - 1) / 7);
}
exports.default = new structures_1.NativeFunction({
    name: "$week",
    version: "1.5.0",
    description: "Returns current week of month",
    unwrap: true,
    output: structures_1.ArgType.Number,
    execute: async function (ctx) {
        return this.success(getWeekOfMonth(new Date(new Date().toLocaleString("en-US", { timeZone: ctx.timezone, calendar: ctx.calendar }))));
    }
});
//# sourceMappingURL=week.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
function getWeekOfMonth(date) {
    const day = date.getDate();
    return Math.floor((day - 1) / 7);
}
exports.default = new structures_1.NativeFunction({
    name: "$day",
    version: "1.2.0",
    description: "Returns current day",
    unwrap: true,
    output: structures_1.ArgType.Number,
    execute: function () {
        return this.success(getWeekOfMonth(new Date()));
    }
});
//# sourceMappingURL=week.js.map
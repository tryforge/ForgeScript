"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const hour_1 = require("./hour");
exports.default = new structures_1.NativeFunction({
    name: "$day",
    version: "1.2.0",
    description: "Returns current day of month",
    aliases: ["$dayOfMonth"],
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "format",
            description: "The format of the day",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: hour_1.BasicTimeFormat
        }
    ],
    output: structures_1.ArgType.String,
    execute: async function (ctx, [format]) {
        return this.success(new Date().toLocaleString("en-US", { day: format || "numeric", timeZone: ctx.timezone, calendar: ctx.calendar }));
    }
});
//# sourceMappingURL=day.js.map
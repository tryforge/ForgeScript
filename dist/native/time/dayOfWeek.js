"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const month_1 = require("./month");
exports.default = new structures_1.NativeFunction({
    name: "$dayOfWeek",
    version: "2.3.0",
    description: "Returns current day of week",
    aliases: ["$weekday"],
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "format",
            description: "The format of the day",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: month_1.ExtendedTimeFormat
        }
    ],
    output: structures_1.ArgType.String,
    execute: async function (ctx, [format]) {
        const options = { timeZone: ctx.timezone, calendar: ctx.calendar };
        if (format && format !== "numeric" && format !== "2-digit")
            options.weekday = format;
        const day = new Date().toLocaleString("en-US", options);
        return this.success(options.weekday ? day : new Date(day).getUTCDay());
    }
});
//# sourceMappingURL=dayOfWeek.js.map
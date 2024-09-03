"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const day_1 = require("./day");
exports.default = new structures_1.NativeFunction({
    name: "$month",
    version: "1.2.0",
    description: "Returns current month",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "format",
            description: "The format of the month",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: day_1.ExtendedTimeFormat
        }
    ],
    output: structures_1.ArgType.String,
    execute: async function (ctx, [format]) {
        return this.success(new Date().toLocaleString("en-US", { month: format || "numeric", timeZone: ctx.timezone, calendar: ctx.calendar }));
    }
});
//# sourceMappingURL=month.js.map
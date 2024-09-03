"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtendedTimeFormat = void 0;
const structures_1 = require("../../structures");
var ExtendedTimeFormat;
(function (ExtendedTimeFormat) {
    ExtendedTimeFormat["Numeric"] = "numeric";
    ExtendedTimeFormat["TwoDigit"] = "2-digit";
    ExtendedTimeFormat["Long"] = "long";
    ExtendedTimeFormat["Short"] = "short";
    ExtendedTimeFormat["Narrow"] = "narrow";
})(ExtendedTimeFormat || (exports.ExtendedTimeFormat = ExtendedTimeFormat = {}));
exports.default = new structures_1.NativeFunction({
    name: "$day",
    version: "1.2.0",
    description: "Returns current day",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "format",
            description: "The format of the day",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: ExtendedTimeFormat
        }
    ],
    output: structures_1.ArgType.String,
    execute: async function (ctx, [format]) {
        const options = { timeZone: ctx.timezone, calendar: ctx.calendar };
        if (format === "numeric" || format === "2-digit" || !format) {
            options.day = format || "numeric";
        }
        else {
            options.weekday = format;
        }
        return this.success(new Date().toLocaleString("en-US", options));
    }
});
//# sourceMappingURL=day.js.map
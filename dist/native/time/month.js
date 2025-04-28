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
            enum: ExtendedTimeFormat
        }
    ],
    output: structures_1.ArgType.String,
    execute: async function (ctx, [format]) {
        return this.success(new Date().toLocaleString("en-US", { month: format || "numeric", timeZone: ctx.timezone, calendar: ctx.calendar }));
    }
});
//# sourceMappingURL=month.js.map
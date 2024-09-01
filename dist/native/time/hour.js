"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicTimeFormat = void 0;
const structures_1 = require("../../structures");
var BasicTimeFormat;
(function (BasicTimeFormat) {
    BasicTimeFormat["Numeric"] = "numeric";
    BasicTimeFormat["TwoDigit"] = "2-digit";
})(BasicTimeFormat || (exports.BasicTimeFormat = BasicTimeFormat = {}));
exports.default = new structures_1.NativeFunction({
    name: "$hour",
    version: "1.2.0",
    description: "Returns current hour",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "format",
            description: "The format of the hour",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: BasicTimeFormat
        }
    ],
    output: structures_1.ArgType.Number,
    execute: async function (ctx, [format]) {
        format ??= BasicTimeFormat.Numeric;
        const hour = new Date().toLocaleString("en-US", { hour: format, hour12: false, timeZone: ctx.timezone, calendar: ctx.calendar });
        return this.success(format === BasicTimeFormat.Numeric ? parseInt(hour, 10).toString() : hour);
    }
});
//# sourceMappingURL=hour.js.map
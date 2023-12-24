"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateType = void 0;
const structures_1 = require("../structures");
var DateType;
(function (DateType) {
    DateType[DateType["LocaleDate"] = 0] = "LocaleDate";
    DateType[DateType["LocaleTime"] = 1] = "LocaleTime";
    DateType[DateType["Locale"] = 2] = "Locale";
    DateType[DateType["Date"] = 3] = "Date";
    DateType[DateType["ISO"] = 4] = "ISO";
    DateType[DateType["UTC"] = 5] = "UTC";
    DateType[DateType["Time"] = 6] = "Time";
})(DateType || (exports.DateType = DateType = {}));
exports.default = new structures_1.NativeFunction({
    name: "$parseDate",
    version: "1.0.2",
    description: "Parses valid ms to a date",
    brackets: true,
    args: [
        {
            name: "ms",
            description: "The ms to convert to date",
            rest: false,
            type: structures_1.ArgType.Number,
            required: true,
        },
        {
            name: "type",
            description: "The date type",
            enum: DateType,
            rest: false,
            required: true,
            type: structures_1.ArgType.Enum,
        },
    ],
    unwrap: true,
    execute(_, [ms, type]) {
        const date = new Date(ms);
        return this.success(type === DateType.Date
            ? date.toDateString()
            : type === DateType.ISO
                ? date.toISOString()
                : type === DateType.Locale
                    ? date.toLocaleString()
                    : type === DateType.LocaleDate
                        ? date.toLocaleDateString()
                        : type === DateType.LocaleTime
                            ? date.toLocaleTimeString()
                            : type === DateType.Time
                                ? date.toTimeString()
                                : type === DateType.UTC
                                    ? date.toUTCString()
                                    : null);
    },
});
//# sourceMappingURL=parseDate.js.map
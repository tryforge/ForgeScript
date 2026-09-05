"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const hour_1 = require("./hour");
exports.default = new structures_1.NativeFunction({
    name: "$minute",
    version: "1.2.0",
    description: "Returns current minute",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "format",
            description: "The format of the minute",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: hour_1.BasicTimeFormat
        }
    ],
    output: structures_1.ArgType.Number,
    execute: async function (ctx, [format]) {
        format ||= hour_1.BasicTimeFormat.Numeric;
        const minute = new Date().toLocaleString("en-US", { minute: format, timeZone: ctx.timezone, calendar: ctx.calendar });
        return this.success(format === hour_1.BasicTimeFormat.TwoDigit ? minute.padStart(2, "0") : minute);
    }
});
//# sourceMappingURL=minute.js.map
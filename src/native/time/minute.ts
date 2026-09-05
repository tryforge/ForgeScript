/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction, Return } from "../../structures"
import { BasicTimeFormat } from "./hour"

export default new NativeFunction({
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
            type: ArgType.Enum,
            enum: BasicTimeFormat
        }
    ],
    output: ArgType.Number,
    execute: async function(ctx, [format]) {
        format ||= BasicTimeFormat.Numeric
        const minute = new Date().toLocaleString("en-US", { minute: format, timeZone: ctx.timezone, calendar: ctx.calendar })
        return this.success(format === BasicTimeFormat.TwoDigit ? minute.padStart(2, "0") : minute)
    }
})
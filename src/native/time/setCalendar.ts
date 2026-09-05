/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { CalendarType } from "../../structures"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$setCalendar",
    version: "1.5.0",
    description: "Sets the calendar for time functions",
    aliases: ["$calendar"],
    unwrap: true,
    brackets: true,
    experimental: true,
    args: [
        {
            name: "type",
            description: "The calendar type to use",
            rest: false,
            type: ArgType.Enum,
            enum: CalendarType,
            required: true,
        },
    ],
    execute(ctx, [type]) {
        ctx.calendar = type
        return this.success()
    }
})
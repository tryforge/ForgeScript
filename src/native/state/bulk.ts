/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { BulkProperties, BulkProperty } from "../../properties/bulk"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$bulk",
    version: "1.4.0",
    description: "Retrieves data from an event whose context was a bulk delete event",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "property",
            description: "The property to pull",
            rest: false,
            type: ArgType.Enum,
            enum: BulkProperty,
            required: true,
        },
        {
            name: "separator",
            description: "The separator to use in case of array",
            rest: false,
            type: ArgType.String,
        },
    ],
    output: [
        ArgType.Unknown,
        ArgType.Json
    ],
    execute(ctx, [prop, sep]) {
        const bulk = ctx.states?.bulk?.new
        if (this.hasFields) return this.success(BulkProperties[prop](bulk, sep))
        return this.successJSON(bulk)
    },
})

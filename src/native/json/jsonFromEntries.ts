/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$jsonFromEntries",
    version: "2.7.0",
    description: "Converts an array of entries into an object",
    aliases: ["$fromEntries"],
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "variable",
            description: "The variable to get entries from",
            rest: false,
            type: ArgType.String,
            required: true,
        }
    ],
    output: ArgType.Json,
    execute(ctx, [name]) {
        const arr = ctx.getEnvironmentKey(name)
        if (!Array.isArray(arr)) return this.success()

        try {
            return this.successJSON(Object.fromEntries(arr))
        } catch {
            return this.success()
        }
    },
})
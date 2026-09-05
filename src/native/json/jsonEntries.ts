/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$jsonEntries",
    version: "1.4.0",
    description: "Gets entries from a JSON variable",
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
    unwrap: true,
    execute(ctx, [name]) {
        const json = ctx.getEnvironmentKey(name)
        if (!json) return this.success()
        return this.successJSON(Object.entries(json))
    },
})
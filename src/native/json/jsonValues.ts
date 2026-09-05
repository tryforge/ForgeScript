/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import array from "../../functions/array"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$jsonValues",
    version: "1.4.0",
    description: "Gets values from a JSON variable",
    brackets: true,
    args: [
        {
            name: "variable",
            description: "The variable to get values from",
            rest: false,
            type: ArgType.String,
            required: true,
        },
        {
            name: "separator",
            description: "The separator to use for each value",
            type: ArgType.String,
            rest: false,
        },
    ],
    output: [
        ArgType.Json,
        array<ArgType.Unknown>()
    ],
    unwrap: true,
    execute(ctx, [name, sep]) {
        const json = ctx.getEnvironmentKey(name)
        if (!json) return this.success()
        return this.successJSON(Object.values(json).map((v) => (typeof v === "string" ? v : JSON.stringify(v))).join(sep ?? ", "))
    },
})
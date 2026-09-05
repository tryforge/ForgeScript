/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction } from "../../structures/@internal/NativeFunction"

export default new NativeFunction({
    name: "$jsonAssign",
    version: "2.6.0",
    description: "Combines multiple JSON objects into a single JSON object",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "variable",
            description: "The variable that holds the target object",
            required: true,
            type: ArgType.String,
            rest: false
        },
        {
            name: "other variable",
            description: "The variable to load the result to, leave empty to return output",
            type: ArgType.String,
            rest: false
        },
        {
            name: "objects",
            description: "The objects from which to copy properties",
            type: ArgType.Json,
            required: true,
            rest: true
        }
    ],
    output: ArgType.Json,
    execute(ctx, [ var1, var2, objects ]) {
        const json = ctx.getEnvironmentKey(var1)
        if (!json) return this.success()

        const obj = Object.assign(json, ...objects)
        if (var2) return this.success(void ctx.setEnvironmentKey(var2, obj))
        else return this.successJSON(obj)
    }
})
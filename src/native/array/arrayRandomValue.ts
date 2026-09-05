/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$arrayRandomValue",
    version: "1.4.0",
    description: "Returns a random element",
    unwrap: true,
    output: ArgType.Unknown,
    brackets: true,
    args: [
        {
            name: "variable",
            description: "The variable the array is held on",
            type: ArgType.String,
            rest: false,
            required: true,
        },
    ],
    execute(ctx, [variable]) {
        const arr = ctx.getEnvironmentInstance(Array, variable)
        return this.successJSON(Array.isArray(arr) ? arr[Math.floor(Math.random() * arr.length)] : undefined)
    },
})

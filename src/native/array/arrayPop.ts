/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$arrayPop",
    version: "1.0.0",
    description: "Deletes the last element of the array and returns it",
    unwrap: true,
    output: ArgType.Unknown,
    args: [
        {
            name: "name",
            description: "The variable that holds the array",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    brackets: true,
    execute(ctx, [name]) {
        const arr = ctx.getEnvironmentKey(name)
        if (Array.isArray(arr)) return this.successJSON(arr.pop())
        return this.success()
    },
})

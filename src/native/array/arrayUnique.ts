/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { isEqual, uniqWith } from "lodash"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$arrayUnique",
    version: "2.5.0",
    description: "Removes duplicate elements from the array",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "variable",
            description: "The variable the array is held on",
            type: ArgType.String,
            rest: false,
            required: true,
        },
        {
            name: "other variable",
            description: "The variable to load result to, leave empty to return output",
            rest: false,
            required: false,
            type: ArgType.String
        },
    ],
    output: ArgType.Json,
    execute(ctx, [variable, other]) {
        const arr = ctx.getEnvironmentInstance(Array, variable)
        if (arr !== null) {
            const unique = uniqWith(arr, isEqual)

            if (other)
                ctx.setEnvironmentKey(other, unique)
            else
                return this.successJSON(unique)
        }
        return this.success()
    },
})
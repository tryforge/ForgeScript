/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction } from "../../structures/@internal/NativeFunction"
import { Return } from "../../structures/@internal/Return"

export default new NativeFunction({
    name: "$return",
    version: "1.0.0",
    description: "Returns a value",
    unwrap: true,
    output: ArgType.Unknown,
    args: [
        {
            name: "value",
            description: "The value to return",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    brackets: false,
    execute(ctx, [ val ]) {
        return this.return(val ?? "")
    },
})

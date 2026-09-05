/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$floor",
    version: "1.0.0",
    description: "Returns the greatest integer less than or equal to its numeric argument",
    brackets: true,
    unwrap: true,
    output: ArgType.Number,
    args: [
        {
            name: "number",
            description: "The number to use",
            rest: false,
            type: ArgType.Number,
            required: true,
        },
    ],
    execute(ctx, [n]) {
        return this.success(Math.floor(n))
    },
})

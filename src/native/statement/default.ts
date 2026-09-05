/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$default",
    version: "1.0.6",
    brackets: true,
    unwrap: true,
    description: "Returns right hand value if the left hand value is falsy",
    args: [
        {
            name: "left hand",
            description: "Left hand value",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "right hand",
            description: "Right hand value",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    output: ArgType.String,
    execute(ctx, [lhs, rhs]) {
        return this.success(lhs || rhs)
    },
})

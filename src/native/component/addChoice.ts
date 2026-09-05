/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$addChoice",
    version: "1.0.6",
    description: "Adds an autocomplete choice",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "choice name",
            description: "The name for this choice",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "choice value",
            description: "The value for this choice",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    execute(ctx, [name, value]) {
        ctx.container.choices.push({
            name,
            value,
        })

        return this.success()
    },
})

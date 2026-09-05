/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$jsonDelete",
    version: "1.4.0",
    description: "Deletes a key from a traversed JSON",
    unwrap: true,
    brackets: true,
    output: ArgType.Boolean,
    args: [
        {
            name: "keys",
            description: "The keys to use to traverse the object",
            rest: true,
            required: true,
            type: ArgType.String
        }
    ],
    execute(ctx, [ keys ]) {
        return this.success(ctx.traverseDeleteEnvironmentKey(...keys))
    },
})
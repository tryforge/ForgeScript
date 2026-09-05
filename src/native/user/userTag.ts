/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$userTag",
    version: "1.4.0",
    description: "Returns the legacy tag of a user",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "user ID",
            description: "The user to get its tag",
            rest: false,
            required: true,
            type: ArgType.User
        }
    ],
    output: ArgType.String,
    execute(ctx, [ u ]) {
        return this.success((u ?? ctx.user)?.tag)
    },
})
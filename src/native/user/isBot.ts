/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$isBot",
    version: "1.0.0",
    description: "Returns whether the user is a bot",
    unwrap: true,
    output: ArgType.Boolean,
    args: [
        {
            name: "user ID",
            description: "The user to check whether its a bot",
            required: true,
            rest: false,
            type: ArgType.User,
        },
    ],
    brackets: false,
    execute(ctx, [user]) {
        return this.success(Boolean((user ?? ctx.user)?.bot))
    },
})

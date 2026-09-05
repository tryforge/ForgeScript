/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$discriminator",
    version: "1.4.0",
    description: "Returns the discriminator of a user",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "user ID",
            description: "The user to get its discriminator",
            rest: false,
            required: true,
            type: ArgType.User
        }
    ],
    output: ArgType.String,
    execute(ctx, [user]) {
        return this.success((user ?? ctx.user)?.discriminator)
    },
})
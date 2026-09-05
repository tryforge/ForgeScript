/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$userDisplayName",
    version: "1.0.0",
    description: "Returns the display name of a user",
    unwrap: true,
    output: ArgType.String,
    args: [
        {
            name: "user ID",
            description: "The user to return its display name",
            required: true,
            rest: false,
            type: ArgType.User,
        },
    ],
    brackets: false,
    async execute(ctx, [user]) {
        return this.success((user ?? ctx.user)?.displayName)
    },
})

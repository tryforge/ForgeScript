/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$userGuildTag",
    version: "2.5.0",
    description: "Returns the primary guild tag name of a user",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "user ID",
            description: "The user to get its primary guild",
            required: true,
            rest: false,
            type: ArgType.User,
        },
    ],
    output: ArgType.String,
    execute(ctx, [user]) {
        return this.success((user ?? ctx.user)?.primaryGuild?.tag)
    },
})
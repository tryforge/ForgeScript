/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction } from "../../structures/@internal/NativeFunction"

export default new NativeFunction({
    name: "$username",
    version: "1.0.0",
    description: "Returns the username of a user",
    brackets: false,
    output: ArgType.String,
    args: [
        {
            name: "id",
            description: "The user id to get the username of",
            type: ArgType.User,
            rest: false,
        },
    ],
    unwrap: true,
    execute: async function (ctx, [user]) {
        user ??= ctx.user // < No bracket support
        return this.success(user?.username)
    },
})

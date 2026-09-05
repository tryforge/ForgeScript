/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$userURL",
    version: "2.7.0",
    description: "Returns the url of a user",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "user ID",
            description: "The user to get its url",
            rest: false,
            type: ArgType.User,
            required: true,
        },
    ],
    output: ArgType.URL,
    execute(ctx, [user]) {
        const id = (user ?? ctx.user)?.id
        return this.success(id ? `https://discord.com/users/${id}` : null)
    },
})
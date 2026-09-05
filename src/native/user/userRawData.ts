/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$userRawData",
    version: "1.5.0",
    description: "Returns the raw data of a user",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "user ID",
            description: "The user to get raw data from",
            rest: false,
            type: ArgType.User,
            required: true,
        },
    ],
    output: ArgType.Json,
    execute(ctx, [user]) {
        return this.successJSON((user ?? ctx.user)?.toJSON())
    },
})
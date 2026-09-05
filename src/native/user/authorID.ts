/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction } from "../../structures/@internal/NativeFunction"

export default new NativeFunction({
    name: "$authorID",
    version: "1.0.0",
    aliases: ["$userID"],
    description: "Retrieves a user's id",
    unwrap: false,
    output: ArgType.User,
    execute(ctx) {
        return this.success(ctx.user?.id)
    },
})

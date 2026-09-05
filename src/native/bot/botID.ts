/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$botID",
    version: "1.0.0",
    description: "Returns the client's id",
    unwrap: false,
    aliases: [
        "$clientID"
    ],
    output: ArgType.User,
    execute(ctx) {
        return this.success(ctx.client.user.id)
    },
})

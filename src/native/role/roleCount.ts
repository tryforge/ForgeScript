/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$roleCount",
    version: "1.0.0",
    description: "Returns the role count of all servers",
    unwrap: true,
    output: ArgType.Number,
    execute(ctx) {
        return this.success(ctx.client.guilds.cache.reduce((x, y) => x + y.roles.cache.size, 0))
    },
})

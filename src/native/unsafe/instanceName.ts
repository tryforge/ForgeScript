/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$instanceName",
    version: "1.4.0",
    aliases: [
        "$instance",
        "$contextInstance"
    ],
    description: "Returns the context's instance name",
    output: ArgType.String,
    unwrap: false,
    execute(ctx) {
        return this.success(ctx.obj?.constructor?.name)
    },
})
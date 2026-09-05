/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$debug",
    version: "1.0.0",
    output: ArgType.String,
    description: "Returns the debug message",
    unwrap: false,
    execute(ctx) {
        return this.success(ctx.runtime.extras)
    },
})

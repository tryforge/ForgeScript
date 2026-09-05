/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$error",
    version: "1.0.0",
    description: "Returns the error message",
    unwrap: false,
    output: ArgType.Unknown,
    execute(ctx) {
        return this.success(ctx.runtime.extras)
    },
})

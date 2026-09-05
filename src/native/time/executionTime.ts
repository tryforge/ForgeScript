/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$executionTime",
    version: "1.0.3",
    description: "Returns current execution time",
    unwrap: false,
    output: ArgType.Number,
    execute(ctx) {
        return this.success(performance.now() - ctx.executionTimestamp)
    },
})

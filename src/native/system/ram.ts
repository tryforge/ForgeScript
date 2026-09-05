/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$ram",
    version: "1.0.0",
    description: "Returns the current ram usage in MB",
    aliases: [
        "$memory",
        "$ramUsage",
    ],
    unwrap: false,
    output: ArgType.Number,
    execute() {
        return this.success(process.memoryUsage().heapUsed / (1024 ** 2))
    },
})
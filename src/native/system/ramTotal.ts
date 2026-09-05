/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction, Return } from "../../structures"
import os from "node:os"

export default new NativeFunction({
    name: "$ramTotal",
    version: "2.2.0",
    description: "Returns the maximum total ram capacity of the system in GB",
    aliases: [
        "$memoryTotal",
        "$maxRam",
    ],
    unwrap: false,
    output: ArgType.Number,
    execute(ctx) {
        return this.success(os.totalmem() / (1024 ** 3))
    },
})
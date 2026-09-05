/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction, Return } from "../../structures"
import os from "node:os"

export default new NativeFunction({
    name: "$cpuArch",
    version: "1.0.7",
    output: ArgType.String,
    description: "Returns the cpu architecture",
    unwrap: false,
    execute() {
        return this.success(os.arch())
    },
})

/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction, Return } from "../../structures"
import os from "node:os"

export default new NativeFunction({
    name: "$os",
    version: "1.0.7",
    description: "Returns the operating system name",
    unwrap: false,
    output: ArgType.String,
    execute() {
        return this.success(os.platform())
    },
})

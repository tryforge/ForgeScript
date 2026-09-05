/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$nodeVersion",
    version: "1.0.0",
    description: "Returns the node version",
    unwrap: false,
    output: ArgType.String,
    execute(ctx) {
        return this.success(process.version)
    },
})

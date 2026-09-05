/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$getTimestamp",
    version: "1.0.0",
    description: "Gets the current timestamp",
    unwrap: false,
    output: ArgType.Number,
    execute() {
        return this.success(Date.now())
    },
})

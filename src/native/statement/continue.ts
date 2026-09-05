/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$continue",
    version: "1.0.3",
    description: "Skips executing bottom code of the loop",
    unwrap: false,
    execute() {
        return this.continue()
    },
})

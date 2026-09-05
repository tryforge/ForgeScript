/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$silent",
    version: "2.6.0",
    description: "Marks the response as silent",
    unwrap: false,
    execute(ctx) {
        ctx.container.silent = true
        return this.success()
    },
})

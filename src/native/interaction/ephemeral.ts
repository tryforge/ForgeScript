/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$ephemeral",
    version: "1.0.0",
    description: "Marks this reply as ephemeral",
    unwrap: false,
    execute(ctx) {
        ctx.container.ephemeral = true
        return this.success()
    },
})

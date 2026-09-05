/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$disableAllMentions",
    version: "1.3.0",
    description: "Disables every possible mention",
    unwrap: false,
    execute(ctx) {
        ctx.container.allowedMentions.parse = []
        return this.success()
    },
})
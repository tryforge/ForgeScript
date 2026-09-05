/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$nomention",
    version: "1.3.0",
    description: "Disables reply ping",
    unwrap: false,
    execute(ctx) {
        ctx.container.allowedMentions.repliedUser = false
        return this.success()
    },
})
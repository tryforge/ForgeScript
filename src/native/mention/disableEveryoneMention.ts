/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$disableEveryoneMention",
    version: "1.3.0",
    description: "Disables everyone mention",
    unwrap: false,
    execute(ctx) {
        ctx.container.unparseMentions("everyone")
        return this.success()
    },
})
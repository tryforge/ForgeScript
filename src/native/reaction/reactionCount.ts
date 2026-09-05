/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$reactionCount",
    version: "1.5.0",
    description: "Returns the count of reacted users",
    unwrap: true,
    output: ArgType.Number,
    execute(ctx) {
        return this.success(ctx.reaction?.count)
    },
})
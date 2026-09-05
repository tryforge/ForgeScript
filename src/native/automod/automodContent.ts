/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$automodContent",
    version: "1.2.0",
    description: "Returns the content automod acted upon",
    unwrap: false,
    output: ArgType.String,
    execute(ctx) {
        return this.success(ctx.automod?.content)
    },
})
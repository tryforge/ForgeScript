/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$isMessageComponent",
    version: "2.7.0",
    description: "Returns whether the interaction is a message component",
    unwrap: false,
    output: ArgType.Boolean,
    execute(ctx) {
        return this.success(Boolean(ctx.interaction?.isMessageComponent()))
    },
})

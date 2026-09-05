/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$reactionMessageID",
    version: "1.0.0",
    description: "Returns the message id of the reacted message",
    unwrap: true,
    output: ArgType.Message,
    execute(ctx) {
        return this.success(ctx.reaction?.message.id)
    },
})

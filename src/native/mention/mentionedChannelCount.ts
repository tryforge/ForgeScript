/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import array from "../../functions/array"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$mentionedChannelCount",
    aliases: [
        "$mentionedChannelsCount"
    ],
    output: ArgType.Number,
    version: "1.3.0",
    description: "Returns the mentioned channel count",
    unwrap: false,
    execute(ctx) {
        return this.success(ctx.message?.mentions.channels.size)
    },
})

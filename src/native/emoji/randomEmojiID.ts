/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$randomEmojiID",
    version: "1.0.3",
    description: "Returns a random emoji ID",
    unwrap: false,
    output: ArgType.GuildEmoji,
    execute(ctx) {
        return this.success(ctx.client.emojis.cache.randomKey())
    },
})

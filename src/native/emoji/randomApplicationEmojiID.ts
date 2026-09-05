/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$randomApplicationEmojiID",
    version: "1.5.0",
    description: "Returns a random emoji ID of the application",
    unwrap: false,
    output: ArgType.ApplicationEmoji,
    async execute(ctx) {
        const emojis = await ctx.fetchApplicationEmojis(true)
        return this.success(emojis ? emojis.randomKey() : null)
    },
})
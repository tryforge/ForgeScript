/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$randomGuildEmojiID",
    version: "1.0.3",
    description: "Returns a random emoji ID of a guild",
    unwrap: true,
    brackets: false,
    output: ArgType.GuildEmoji,
    args: [
        {
            name: "guild ID",
            description: "The guild to get emoji from",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
    ],
    execute(ctx, [guild]) {
        return this.success((guild ?? ctx.guild)?.emojis.cache.randomKey())
    },
})
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$emojiGuildID",
    version: "1.0.0",
    description: "Returns the emoji guild id",
    brackets: false,
    unwrap: true,
    output: ArgType.Guild,
    args: [
        {
            name: "emoji ID",
            description: "The emoji to return its guild id",
            rest: false,
            type: ArgType.GuildEmoji,
            required: true,
        },
    ],
    execute(ctx, [emoji]) {
        return this.success((emoji ?? ctx.emoji)?.guild.id)
    },
})
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import array from "../../functions/array"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$emojiIDs",
    description: "Returns every guild emoji id",
    version: "1.3.0",
    unwrap: true,
    brackets: false,
    output: array<ArgType.GuildEmoji>(),
    args: [
        {
            name: "separator",
            description: "The separator to use for every emoji",
            rest: false,
            type: ArgType.String
        }
    ],
    execute(ctx, [ sep ]) {
        return this.success(ctx.client.emojis.cache.map(x => x.id).join(sep ?? ", "))
    },
})
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$emojiURL",
    version: "1.0.0",
    description: "Returns the emoji url",
    brackets: false,
    unwrap: true,
    output: ArgType.URL,
    args: [
        {
            name: "emoji ID",
            description: "The emoji to return its url",
            rest: false,
            type: ArgType.Emoji,
            required: true,
        },
    ],
    execute(ctx, [emoji]) {
        return this.success((emoji ?? ctx.emoji)?.imageURL())
    },
})
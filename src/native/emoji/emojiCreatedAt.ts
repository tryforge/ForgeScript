/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$emojiCreatedAt",
    version: "1.0.0",
    description: "Returns the emoji creation timestamp",
    brackets: false,
    unwrap: true,
    output: ArgType.Number,
    args: [
        {
            name: "emoji ID",
            description: "The emoji to return its creation timestamp",
            rest: false,
            type: ArgType.Emoji,
            required: true,
        },
    ],
    execute(ctx, [emoji]) {
        return this.success((emoji ?? ctx.emoji)?.createdTimestamp)
    },
})
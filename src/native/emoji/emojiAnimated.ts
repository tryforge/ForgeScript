/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$emojiAnimated",
    version: "1.0.0",
    description: "Returns whether the emoji is animated",
    brackets: false,
    unwrap: true,
    output: ArgType.Boolean,
    args: [
        {
            name: "emoji ID",
            description: "The emoji to return its animation state",
            rest: false,
            type: ArgType.Emoji,
            required: true,
        },
    ],
    execute(ctx, [emoji]) {
        return this.success((emoji ?? ctx.emoji)?.animated)
    },
})
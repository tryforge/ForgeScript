/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$emojiRequiresColons",
    version: "1.0.0",
    description: "Returns whether the emoji requires colons",
    brackets: false,
    unwrap: true,
    output: ArgType.Boolean,
    args: [
        {
            name: "emoji ID",
            description: "The emoji to return its colons state",
            rest: false,
            type: ArgType.Emoji,
            required: true,
        },
    ],
    execute(ctx, [emoji]) {
        emoji ??= ctx.emoji!
        return this.success(emoji && "requiresColons" in emoji ? emoji.requiresColons : undefined)
    },
})
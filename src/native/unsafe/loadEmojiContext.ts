/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$loadEmojiContext",
    version: "2.7.0",
    description: "Loads an emoji instance to the current context, this is not reversible and is adviced to use with $scope",
    aliases: [
        "$useEmojiContext",
        "$asEmojiContext"
    ],
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "emoji ID",
            description: "The emoji to adapt context with",
            rest: false,
            required: true,
            type: ArgType.Emoji
        }
    ],
    execute(ctx, [ e ]) {
        ctx.obj = e
        return this.success()
    },
})
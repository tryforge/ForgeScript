/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, CompiledFunction, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$guildEmojiExists",
    version: "2.5.0",
    description: "Returns whether an emoji id exists on a guild",
    unwrap: true,
    aliases: [
        "$serverEmojiExists"
    ],
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull emoji from",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "emoji ID",
            description: "The emoji to check for",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    output: ArgType.Boolean,
    async execute(ctx, [guild, id]) {
        return this.success(CompiledFunction.IdRegex.test(id) && guild.emojis.cache.has(id))
    },
})
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { parseEmoji } from "discord.js"
import { ArgType, CompiledFunction, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$findEmoji",
    version: "1.0.0",
    description: "Finds an emoji",
    brackets: true,
    output: ArgType.Emoji,
    args: [
        {
            name: "query",
            description: "The id, format or emoji name to find",
            rest: false,
            type: ArgType.String,
            required: true,
        },
    ],
    unwrap: true,
    async execute(ctx, [q]) {
        const emojis = await ctx.fetchApplicationEmojis(true)
        const parsed = parseEmoji(q)

        if (CompiledFunction.IdRegex.test(q)) {
            const e = ctx.client.emojis.cache.get(q) || emojis?.get(q)
            if (e) return this.success(e.id)
        }

        const name = parsed?.name.toLowerCase()

        return this.success(
            ctx.client.emojis.cache.find((x) => x.id === q || x.name?.toLowerCase() === name || x.toString() === q)?.id || emojis?.find((x) => x.id === q || x.name?.toLowerCase() === name || x.toString() === q)?.id
        )
    },
})
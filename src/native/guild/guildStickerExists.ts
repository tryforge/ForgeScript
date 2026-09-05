/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, CompiledFunction, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$guildStickerExists",
    version: "2.5.0",
    description: "Returns whether a sticker id exists on a guild",
    unwrap: true,
    aliases: [
        "$serverStickerExists"
    ],
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull sticker from",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "sticker ID",
            description: "The sticker to check for",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    output: ArgType.Boolean,
    async execute(ctx, [guild, id]) {
        return this.success(CompiledFunction.IdRegex.test(id) && guild.stickers.cache.has(id))
    },
})
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import array from "../../functions/array"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$guildBannedMembers",
    version: "1.4.0",
    description: "Returns banned member ids of a guild",
    aliases: [
        "$serverBannedMembers"
    ],
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "guild ID",
            rest: false,
            required: true,
            type: ArgType.Guild,
            description: "The guild to pull banned members from"
        },
        {
            name: "separator",
            rest: false,
            type: ArgType.String,
            description: "The separator for each id"
        }
    ],
    output: array<ArgType.User>(),
    async execute(ctx, [ g, sep ]) {
        g ??= ctx.guild!
        const ids: string[] = []
        let after: string | undefined
        do {
            const bans = await g?.bans.fetch({ limit: 1000, after }).catch(ctx.noop)
            if (!bans) break
            ids.push(...bans.keys())
            after = bans.size === 1000 ? bans.lastKey() : undefined
        } while (after)

        return this.success(ids.join(sep ?? ", "))
    },
})
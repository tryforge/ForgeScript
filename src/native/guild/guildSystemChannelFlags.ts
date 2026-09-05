/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { GuildSystemChannelFlags } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"
import array from "../../functions/array"

export default new NativeFunction({
    name: "$guildSystemChannelFlags",
    version: "2.7.0",
    description: "Returns the system channel flags of a guild",
    aliases: [
        "$serverSystemChannelFlags"
    ],
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to retrieve the data",
            type: ArgType.Guild,
            required: true,
            rest: false,
        },
        {
            name: "separator",
            description: "The separator to use for every flag",
            type: ArgType.String,
            rest: false,
        },
    ],
    output: array(GuildSystemChannelFlags),
    execute(ctx, [guild, sep]) {
        return this.success((guild ?? ctx.guild)?.systemChannelFlags.toArray().join(sep ?? ", "))
    },
})

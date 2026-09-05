/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$guildSystemChannelID",
    version: "1.0.0",
    description: "Returns the system channel ID of a guild",
    aliases: [
        "$serverSystemChannelID"
    ],
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to retrieve the data",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
    ],
    output: ArgType.Channel,
    execute(ctx, [guild]) {
        return this.success((guild ?? ctx.guild)?.systemChannelId)
    },
})

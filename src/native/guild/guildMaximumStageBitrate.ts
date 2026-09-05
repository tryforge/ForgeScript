/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$guildMaximumStageBitrate",
    version: "2.7.0",
    description: "Returns the maximum bitrate for stage channels of this guild",
    aliases: [
        "$serverMaximumStageBitrate"
    ],
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to retrieve the data",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
    ],
    output: ArgType.Number,
    execute(ctx, [guild]) {
        return this.success((guild ?? ctx.guild)?.maximumStageBitrate)
    },
})

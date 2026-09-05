/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$guildMaxStageVideoChannelUsers",
    version: "1.3.0",
    description: "Returns the maximum video channel users for stage channels of this guild",
    brackets: false,
    aliases: [
        "$serverMaxStageVideoChannelUsers"
    ],
    output: ArgType.Number,
    args: [
        {
            name: "guild ID",
            description: "The guild to retrieve the data",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
    ],
    unwrap: true,
    execute(ctx, [guild]) {
        return this.success((guild ?? ctx.guild)?.maxStageVideoChannelUsers)
    },
})

/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$guildRawData",
    version: "1.5.0",
    description: "Returns the raw data of a guild",
    aliases: [
        "$serverRawData"
    ],
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to get raw data from",
            rest: false,
            type: ArgType.Guild,
            required: true,
        },
    ],
    output: ArgType.Json,
    execute(ctx, [guild]) {
        return this.successJSON((guild ?? ctx.guild)?.toJSON())
    },
})
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$guildLarge",
    version: "2.4.0",
    description: "Returns whether a guild is considered as large",
    unwrap: true,
    brackets: false,
    aliases: [
        "$serverLarge"
    ],
    args: [
        {
            name: "guild ID",
            description: "The guild to retrieve the data",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
    ],
    output: ArgType.Boolean,
    execute(ctx, [guild]) {
        return this.success((guild ?? ctx.guild)?.large)
    },
})

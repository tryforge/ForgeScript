/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$guildBoostProgressBarEnabled",
    version: "1.5.0",
    description: "Returns whether a guild has the boost progress bar enabled",
    aliases: [
        "$serverBoostProgressBarEnabled"
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
    output: ArgType.Boolean,
    execute(ctx, [guild]) {
        return this.success((guild ?? ctx.guild)?.premiumProgressBarEnabled)
    },
})
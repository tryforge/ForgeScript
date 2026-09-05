/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$setGuildSplash",
    version: "1.0.0",
    description: "Sets a guild splash, returns boolean",
    unwrap: true,
    aliases: [
        "$setServerSplash"
    ],
    output: ArgType.Boolean,
    args: [
        {
            name: "guild ID",
            rest: false,
            type: ArgType.Guild,
            required: true,
            description: "The guild to set splash on",
        },
        {
            name: "url",
            description: "The new splash",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "reason",
            description: "The reason for this action",
            rest: false,
            type: ArgType.String,
        },
    ],
    brackets: true,
    async execute(ctx, [guild, icon, reason]) {
        return this.success((await guild.setSplash(icon || null, reason || ctx.reason).catch(() => false)) !== false)
    },
})
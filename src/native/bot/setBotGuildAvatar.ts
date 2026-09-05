/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$setBotGuildAvatar",
    version: "2.6.0",
    description: "Sets the bot avatar on a guild",
    brackets: true,
    unwrap: true,
    aliases: [
        "$setClientGuildAvatar"
    ],
    args: [
        {
            name: "guild ID",
            description: "The guild to set avatar on",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "url",
            description: "The icon url",
            rest: false,
            type: ArgType.String,
        },
    ],
    output: ArgType.Boolean,
    async execute(ctx, [guild, url]) {
        return this.success(!!(await guild.members.editMe({ avatar: url }).catch(ctx.noop)))
    },
})

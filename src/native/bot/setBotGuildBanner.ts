/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$setBotGuildBanner",
    version: "2.6.0",
    description: "Sets the bot banner on a guild",
    brackets: true,
    unwrap: true,
    aliases: [
        "$setClientGuildBanner"
    ],
    args: [
        {
            name: "guild ID",
            description: "The guild to set banner on",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "url",
            description: "The banner url",
            rest: false,
            type: ArgType.String,
        },
    ],
    output: ArgType.Boolean,
    async execute(ctx, [guild, url]) {
        return this.success(!!(await guild.members.editMe({ banner: url }).catch(ctx.noop)))
    },
})

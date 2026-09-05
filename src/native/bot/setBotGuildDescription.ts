/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$setBotGuildDescription",
    version: "2.6.0",
    description: "Sets the bot description on a guild",
    aliases: [
        "$setBotGuildBio",
        "$setClientGuildBio",
        "$setClientGuildDescription"
    ],
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to set description on",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "description",
            description: "The new description",
            rest: false,
            type: ArgType.String,
        },
    ],
    output: ArgType.Boolean,
    async execute(ctx, [guild, bio]) {
        return this.success(!!(await guild.members.editMe({ bio }).catch(ctx.noop)))
    },
})
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$memberBotRoleID",
    version: "2.6.0",
    description: "Returns the managed bot role of a member, only available for bots",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull member from",
            rest: false,
            type: ArgType.Guild,
            required: true,
        },
        {
            name: "user ID",
            description: "The user to get the managed bot role from",
            rest: false,
            pointer: 0,
            type: ArgType.Member,
            required: true,
        },
    ],
    output: ArgType.Role,
    execute(ctx, [guild, user]) {
        return this.success(guild.roles.botRoleFor(user)?.id)
    },
})
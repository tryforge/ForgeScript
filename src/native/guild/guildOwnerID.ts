/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$guildOwnerID",
    version: "1.0.0",
    description: "Returns the server owner id",
    brackets: false,
    aliases: [
        "$serverOwnerID"
    ],
    output: ArgType.User,
    args: [
        {
            name: "guild ID",
            description: "The guild to retrieve the owner from",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
    ],
    unwrap: true,
    execute(ctx, [guild]) {
        return this.success((guild ?? ctx.guild)?.ownerId)
    },
})

/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import array from "../../functions/array"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$guildRoleIDs",
    version: "1.3.0",
    description: "Returns every role id of the guild",
    aliases: [
        "$serverRoleIDs",
        "$roleIDs"
    ],
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to get role ids from",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "separator",
            description: "The separator to use for every role",
            rest: false,
            type: ArgType.String
        },
        {
            name: "everyone",
            description: "Whether to include the @everyone role, defaults to true",
            rest: false,
            type: ArgType.Boolean
        }
    ],
    output: array<ArgType.Role>(),
    execute(ctx, [ guild, sep, everyone ]) {
        return this.success(
            (guild ?? ctx.guild)?.roles.cache
                .filter((x) => everyone !== false || x.guild.id !== x.id)
                .map((x) => x.id)
                .join(sep ?? ", ")
        )
    },
})
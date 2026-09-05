/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import array from "../../functions/array"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$roleTags",
    version: "1.3.0",
    description: "Returns all role tags",
    brackets: false,
    output: array<ArgType.String>(),
    unwrap: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull the role from",
            rest: false,
            type: ArgType.Guild,
            required: true,
        },
        {
            name: "role ID",
            description: "The role to return its perms",
            rest: false,
            type: ArgType.Role,
            pointer: 0,
            required: true,
        },
        {
            name: "separator",
            description: "The separator to use for every perm",
            type: ArgType.String,
            required: false,
            rest: false,
        },
    ],
    execute(ctx, [, r, sep ]) {
        r ??= ctx.role!
        return this.success(Object.entries(r.tags ?? {}).filter(x => x[1] === true).map(x => x[0]))
    },
})
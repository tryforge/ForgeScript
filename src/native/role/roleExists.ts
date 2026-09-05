/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, CompiledFunction, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$roleExists",
    version: "1.0.0",
    description: "Returns whether a role id exists",
    unwrap: true,
    brackets: true,
    output: ArgType.Boolean,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull the role from",
            type: ArgType.Guild,
            rest: false,
            required: true,
        },
        {
            name: "role ID",
            description: "The role to check for",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    async execute(ctx, [guild, id]) {
        return this.success(CompiledFunction.IdRegex.test(id) && guild.roles.cache.has(id))
    },
})

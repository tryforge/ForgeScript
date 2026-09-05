/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { PermissionFlagsBits } from "discord.js"
import array from "../../functions/array"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$rolePerms",
    version: "1.0.0",
    description: "Returns the role perms",
    brackets: false,
    unwrap: true,
    output: array(PermissionFlagsBits),
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
        {
            name: "return int",
            description: "Whether to return the perms as bitfield int",
            type: ArgType.Boolean,
            rest: false,
        },
    ],
    execute(ctx, [, role, sep, int]) {
        const perms = (role ?? ctx.role)?.permissions
        return this.success(int ? perms?.bitfield : perms?.toArray().join(sep ?? ", "))
    },
})
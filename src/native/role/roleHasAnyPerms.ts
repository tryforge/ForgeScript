/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { PermissionFlagsBits } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$roleHasAnyPerms",
    version: "2.6.0",
    description: "Returns whether the role has any of the specified perms",
    aliases: [
        "$hasRoleAnyPerms"
    ],
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull the role from",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "role ID",
            description: "The role to get its perms",
            rest: false,
            required: true,
            type: ArgType.Role,
            pointer: 0,
        },
        {
            name: "perms",
            description: "The perms to check for",
            rest: true,
            required: true,
            type: ArgType.Enum,
            enum: PermissionFlagsBits,
        },
    ],
    output: ArgType.Boolean,
    execute(ctx, [, role, perms]) {
        return this.success(role.permissions.any(perms))
    },
})
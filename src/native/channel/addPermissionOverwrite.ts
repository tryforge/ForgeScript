/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { PermissionFlagsBits } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"
import { overwritePermissionsToOverwriteData } from "../../functions/overwritePermissions"

export default new NativeFunction({
    name: "$addPermissionOverwrite",
    version: "2.7.0",
    description: "Adds a new permission overwrite to the channel",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "roleOrUser",
            description: "The role or member to set perms for",
            type: ArgType.RoleOrUser,
            rest: false,
            required: true,
            pointer: 0,
            pointerProperty: "guild"
        },
        {
            name: "perms",
            description: "The permissions to allow or disallow, (+,-)Perm",
            type: ArgType.OverwritePermission,
            rest: true,
            required: true,
            enum: PermissionFlagsBits
        }
    ],
    async execute(ctx, [roleOrUser, raw]) {
        const obj = overwritePermissionsToOverwriteData(roleOrUser.id, raw)
        ctx.permissionOverwrites ??= []
        ctx.permissionOverwrites.push(obj)
        return this.success()
    },
})
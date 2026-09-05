"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
const overwritePermissions_1 = require("../../functions/overwritePermissions");
exports.default = new structures_1.NativeFunction({
    name: "$addPermissionOverwrite",
    version: "2.7.0",
    description: "Adds a new permission overwrite to the channel",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "roleOrUser",
            description: "The role or member to set perms for",
            type: structures_1.ArgType.RoleOrUser,
            rest: false,
            required: true,
            pointer: 0,
            pointerProperty: "guild"
        },
        {
            name: "perms",
            description: "The permissions to allow or disallow, (+,-)Perm",
            type: structures_1.ArgType.OverwritePermission,
            rest: true,
            required: true,
            enum: discord_js_1.PermissionFlagsBits
        }
    ],
    async execute(ctx, [roleOrUser, raw]) {
        const obj = (0, overwritePermissions_1.overwritePermissionsToOverwriteData)(roleOrUser.id, raw);
        ctx.permissionOverwrites ??= [];
        ctx.permissionOverwrites.push(obj);
        return this.success();
    },
});
//# sourceMappingURL=addPermissionOverwrite.js.map
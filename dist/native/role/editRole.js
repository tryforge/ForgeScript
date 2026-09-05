"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$editRole",
    version: "1.0.7",
    description: "Edits a role on a guild, returns boolean",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull the role from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
        {
            name: "role ID",
            pointer: 0,
            type: structures_1.ArgType.Role,
            description: "The role to edit data",
            rest: false,
            required: true,
        },
        {
            name: "name",
            description: "The new role name, leave empty to not modify",
            rest: false,
            type: structures_1.ArgType.String,
        },
        {
            name: "color",
            description: "The new role color, leave empty to not modify",
            rest: false,
            type: structures_1.ArgType.Color,
        },
        {
            name: "icon",
            description: "The new role icon, leave empty to not modify",
            rest: false,
            type: structures_1.ArgType.String,
        },
        {
            name: "hoisted",
            description: "Whether the role is hoisted, leave empty to not modify",
            rest: false,
            type: structures_1.ArgType.Boolean,
        },
        {
            name: "mentionable",
            description: "Whether the role can be mentioned, leave empty to not modify",
            rest: false,
            type: structures_1.ArgType.Boolean,
        },
        {
            name: "perms",
            description: "The new perms for the role",
            rest: true,
            type: structures_1.ArgType.Permission,
        },
    ],
    output: structures_1.ArgType.Boolean,
    async execute(ctx, [, role, name, color, icon, hoist, mentionable, perms]) {
        const edit = await role.edit({
            colors: !color ? undefined : { primaryColor: color },
            mentionable: typeof (mentionable) === "boolean" ? mentionable : undefined,
            hoist: typeof (hoist) === "boolean" ? hoist : undefined,
            name: name || undefined,
            icon: icon || undefined,
            permissions: perms?.length ? perms : undefined,
            reason: ctx.reason
        }).catch(ctx.noop);
        return this.success(!!edit);
    },
});
//# sourceMappingURL=editRole.js.map
"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$editRoleColors",
    version: "2.5.0",
    description: "Edits a role's colors, returns boolean",
    aliases: ["$editRoleColor"],
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
            type: structures_1.ArgType.Role,
            description: "The role to edit colors for",
            rest: false,
            required: true,
            pointer: 0,
        },
        {
            name: "primary",
            description: "The new primary color",
            rest: false,
            type: structures_1.ArgType.Color,
            required: true,
        },
        {
            name: "secondary",
            description: "The new secondary color",
            rest: false,
            type: structures_1.ArgType.Color,
        },
        {
            name: "tertiary",
            description: "The new tertiary color",
            rest: false,
            type: structures_1.ArgType.Color,
        },
    ],
    output: structures_1.ArgType.Boolean,
    async execute(ctx, [, role, primary, secondary, tertiary]) {
        return this.success(!!(await role.setColors({
            primaryColor: primary,
            secondaryColor: secondary || undefined,
            tertiaryColor: tertiary || undefined
        }, ctx.reason).catch(ctx.noop)));
    },
});
//# sourceMappingURL=editRoleColors.js.map
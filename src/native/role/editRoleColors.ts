/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
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
            type: ArgType.Guild,
        },
        {
            name: "role ID",
            type: ArgType.Role,
            description: "The role to edit colors for",
            rest: false,
            required: true,
            pointer: 0,
        },
        {
            name: "primary",
            description: "The new primary color",
            rest: false,
            type: ArgType.Color,
            required: true,
        },
        {
            name: "secondary",
            description: "The new secondary color",
            rest: false,
            type: ArgType.Color,
        },
        {
            name: "tertiary",
            description: "The new tertiary color",
            rest: false,
            type: ArgType.Color,
        },
    ],
    output: ArgType.Boolean,
    async execute(ctx, [, role, primary, secondary, tertiary]) {
        return this.success(!!(await role.setColors({
            primaryColor: primary,
            secondaryColor: secondary || undefined,
            tertiaryColor: tertiary || undefined
        }, ctx.reason).catch(ctx.noop)))
    },
})
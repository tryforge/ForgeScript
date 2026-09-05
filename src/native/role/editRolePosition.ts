/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$editRolePosition",
    version: "1.0.7",
    description: "Edits a role's position, returns boolean",
    unwrap: true,
    brackets: true,
    output: ArgType.Boolean,
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
            pointer: 0,
            type: ArgType.Role,
            description: "The role to edit position for",
            rest: false,
            required: true,
        },
        {
            name: "position",
            description: "The new position for the role",
            rest: false,
            type: ArgType.Number,
            required: true,
        },
    ],
    async execute(ctx, [, role, pos]) {
        return this.success(!!(await role.setPosition(pos, { reason: ctx.reason }).catch(ctx.noop)))
    },
})

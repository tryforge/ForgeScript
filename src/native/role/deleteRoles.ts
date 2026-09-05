/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$deleteRoles",
    version: "1.0.0",
    brackets: true,
    unwrap: true,
    output: ArgType.Number,
    description: "Deletes given roles, returns the count of roles deleted",
    args: [
        {
            name: "guild ID",
            description: "The guild to delete roles from",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "roles",
            description: "The roles to delete",
            rest: true,
            required: true,
            pointer: 0,
            type: ArgType.Role,
        },
    ],
    async execute(ctx, [, roles]) {
        let count = 0
        for (let i = 0, len = roles.length; i < len; i++) {
            const role = roles[i]
            const success = await role.delete(ctx.reason).catch(ctx.noop)
            if (success) count++
        }

        return this.success(count)
    },
})

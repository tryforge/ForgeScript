/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$memberAddRoles",
    version: "1.0.0",
    description: "Adds roles to a member, returns bool",
    unwrap: true,
    brackets: true,
    output: ArgType.Boolean,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull member from",
            rest: false,
            type: ArgType.Guild,
            required: true,
        },
        {
            name: "user ID",
            description: "The user to add roles to",
            rest: false,
            type: ArgType.Member,
            required: true,
            pointer: 0,
        },
        {
            name: "roles",
            description: "The roles to add",
            rest: true,
            type: ArgType.Role,
            pointer: 0,
        },
    ],
    async execute(ctx, [, member, roles]) {
        member ??= ctx.member!
        const d = await member.roles.add(roles, ctx.reason).catch(ctx.noop)

        return this.success(!!d)
    },
})

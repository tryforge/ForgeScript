/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$isKickable",
    version: "2.7.0",
    aliases: ["$memberIsKickable"],
    description: "Returns whether a member is kickable",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull the member from",
            rest: false,
            type: ArgType.Guild,
            required: true,
        },
        {
            name: "user ID",
            description: "The member to check for",
            rest: false,
            type: ArgType.Member,
            pointer: 0,
            required: true,
        },
    ],
    output: ArgType.Boolean,
    execute(ctx, [, member]) {
        member ??= ctx.member!
        return this.success(member?.kickable ?? false)
    },
})
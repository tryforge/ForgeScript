/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$timeout",
    version: "1.0.0",
    description: "Times a member out for X milliseconds, returns bool",
    unwrap: true,
    aliases: [
        "$memberTimeout",
        "$timeoutMember"
    ],
    output: ArgType.Boolean,
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull member from",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "user ID",
            description: "The member to timeout",
            rest: false,
            required: true,
            type: ArgType.Member,
            pointer: 0,
        },
        {
            name: "duration",
            description: "The duration to timeout for",
            rest: false,
            type: ArgType.Time,
        },
        {
            name: "reason",
            description: "The reason to timeout the member",
            rest: false,
            type: ArgType.String,
        },
    ],
    async execute(ctx, [, member, ms, reason]) {
        const timeout = await member.disableCommunicationUntil(ms ? Date.now() + ms : null, reason || ctx.reason).catch(ctx.noop)
        return this.success(!!timeout)
    },
})
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$memberSetNickname",
    version: "1.0.7",
    description: "Edits a member's nickname, returns bool",
    brackets: true,
    output: ArgType.Boolean,
    unwrap: true,
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
            description: "The member to edit its nickname",
            rest: false,
            required: true,
            pointer: 0,
            type: ArgType.Member,
        },
        {
            name: "nickname",
            description: "The new nickname, leave empty to reset",
            rest: false,
            type: ArgType.String,
        },
    ],
    async execute(ctx, [g, m, nick]) {
        const edit = m.id === ctx.client.user.id
            ? g.members.editMe({ nick, reason: ctx.reason })
            : m.setNickname(nick, ctx.reason)

        return this.success(!!(await edit.catch(ctx.noop)))
    },
})
"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$memberSetNickname",
    version: "1.0.7",
    description: "Edits a member's nickname, returns bool",
    brackets: true,
    output: structures_1.ArgType.Boolean,
    unwrap: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull member from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
        {
            name: "user ID",
            description: "The member to edit its nickname",
            rest: false,
            required: true,
            pointer: 0,
            type: structures_1.ArgType.Member,
        },
        {
            name: "nickname",
            description: "The new nickname, leave empty to reset",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    async execute(ctx, [g, m, nick]) {
        const edit = m.id === ctx.client.user.id
            ? g.members.editMe({ nick, reason: ctx.reason })
            : m.setNickname(nick, ctx.reason);
        return this.success(!!(await edit.catch(ctx.noop)));
    },
});
//# sourceMappingURL=memberSetNickname.js.map
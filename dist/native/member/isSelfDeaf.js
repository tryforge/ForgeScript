"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$isSelfDeaf",
    version: "1.0.0",
    description: "Returns whether a member is self deafened",
    brackets: false,
    unwrap: true,
    aliases: [
        "$memberIsSelfDeaf"
    ],
    output: structures_1.ArgType.Boolean,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull the member from",
            rest: false,
            type: structures_1.ArgType.Guild,
            required: true,
        },
        {
            name: "user ID",
            description: "The member to get its voice state",
            rest: false,
            type: structures_1.ArgType.Member,
            pointer: 0,
            required: true,
        },
    ],
    execute(ctx, [, member]) {
        member ??= ctx.member;
        return this.success(member?.voice.selfDeaf ?? false);
    },
});
//# sourceMappingURL=isSelfDeaf.js.map
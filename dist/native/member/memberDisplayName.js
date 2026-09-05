"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$memberDisplayName",
    version: "2.3.0",
    description: "Returns the display name of a member",
    unwrap: true,
    brackets: false,
    output: structures_1.ArgType.String,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull member from",
            rest: false,
            type: structures_1.ArgType.Guild,
            required: true,
        },
        {
            name: "user ID",
            pointer: 0,
            description: "The user to get its display name",
            rest: false,
            type: structures_1.ArgType.Member,
            required: true,
        },
    ],
    execute(ctx, [, member]) {
        member ??= ctx.member;
        return this.success(member?.displayName);
    },
});
//# sourceMappingURL=memberDisplayName.js.map
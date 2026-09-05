"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$kick",
    version: "1.0.0",
    description: "Kicks a member from the guild, returns true or false depending on whether the action was successfully performed",
    unwrap: true,
    brackets: true,
    aliases: [
        "$kickMember",
        "$memberKick"
    ],
    output: structures_1.ArgType.Boolean,
    args: [
        {
            name: "guild ID",
            description: "The guild to kick a member from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
        {
            name: "user ID",
            description: "The user to kick",
            rest: false,
            type: structures_1.ArgType.Member,
            pointer: 0,
            required: true,
        },
        {
            name: "reason",
            description: "The reason to kick for",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    async execute(ctx, [, member, reason]) {
        return this.success((await member.kick(reason || ctx.reason).catch(() => false)) !== false);
    },
});
//# sourceMappingURL=kick.js.map
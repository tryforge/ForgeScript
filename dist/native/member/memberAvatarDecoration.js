"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$memberAvatarDecoration",
    version: "2.4.0",
    description: "Returns the member's avatar decoration",
    brackets: false,
    unwrap: true,
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
            description: "The user to get its avatar decoration",
            pointer: 0,
            rest: false,
            type: structures_1.ArgType.Member,
            required: true,
        },
    ],
    output: structures_1.ArgType.URL,
    execute(ctx, [, user]) {
        const member = user ?? ctx.member ?? ctx.interaction?.member;
        let decor;
        if (member instanceof discord_js_1.GuildMember) {
            decor = member.avatarDecorationData ?? member.user?.avatarDecorationData;
        }
        else {
            const memb = member;
            decor = memb.avatar_decoration_data ?? memb.user?.avatar_decoration_data;
        }
        return this.success(decor ? new discord_js_1.CDN().avatarDecoration(decor.asset) : null);
    },
});
//# sourceMappingURL=memberAvatarDecoration.js.map
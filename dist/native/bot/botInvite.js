"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$botInvite",
    version: "1.0.0",
    description: "Returns a bot's invite link",
    brackets: false,
    unwrap: true,
    aliases: [
        "$clientInvite",
        "$getBotInvite"
    ],
    args: [
        {
            name: "perms",
            description: "The perms for the invite link",
            rest: true,
            type: structures_1.ArgType.String,
            required: true,
        },
    ],
    output: structures_1.ArgType.URL,
    execute(ctx, [perms]) {
        return this.success(ctx.client.generateInvite({
            scopes: ctx.client.application.installParams?.scopes || [discord_js_1.OAuth2Scopes.Bot],
            permissions: perms || ctx.client.application.installParams?.permissions,
        }));
    },
});
//# sourceMappingURL=botInvite.js.map
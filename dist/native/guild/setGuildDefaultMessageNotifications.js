"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$setGuildDefaultMessageNotifications",
    version: "2.1.0",
    description: "Sets the default message notifications setting for a guild, returns bool",
    unwrap: true,
    aliases: [
        "$setServerDefaultMessageNotifications"
    ],
    output: structures_1.ArgType.Boolean,
    args: [
        {
            name: "guild ID",
            description: "The guild to set default message notifications for",
            rest: false,
            type: structures_1.ArgType.Guild,
            required: true,
        },
        {
            name: "setting",
            description: "The new default message notifications setting",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: discord_js_1.GuildDefaultMessageNotifications
        },
        {
            name: "reason",
            description: "The reason for this action",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    brackets: true,
    async execute(ctx, [guild, setting, reason]) {
        return this.success((await guild.setDefaultMessageNotifications(setting || null, reason || ctx.reason).catch(() => false)) !== false);
    },
});
//# sourceMappingURL=setGuildDefaultMessageNotifications.js.map
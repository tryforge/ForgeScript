"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$setGuildRulesChannel",
    version: "2.1.0",
    description: "Sets the rules channel for a guild, returns bool",
    unwrap: true,
    aliases: [
        "$setServerRulesChannel"
    ],
    output: structures_1.ArgType.Boolean,
    args: [
        {
            name: "guild ID",
            description: "The guild to set rules channel for",
            rest: false,
            type: structures_1.ArgType.Guild,
            required: true,
        },
        {
            name: "channel ID",
            description: "The new rules channel",
            rest: false,
            type: structures_1.ArgType.Channel,
            check: (i) => i.type === discord_js_1.ChannelType.GuildText,
            pointer: 0
        },
        {
            name: "reason",
            description: "The reason for this action",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    brackets: true,
    async execute(ctx, [guild, channel, reason]) {
        return this.success((await guild.setRulesChannel(channel || null, reason || ctx.reason).catch(() => false)) !== false);
    },
});
//# sourceMappingURL=setGuildRulesChannel.js.map
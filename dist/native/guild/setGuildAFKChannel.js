"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$setGuildAFKChannel",
    version: "2.1.0",
    description: "Sets the AFK channel for a guild, returns bool",
    unwrap: true,
    aliases: [
        "$setServerAFKChannel"
    ],
    output: structures_1.ArgType.Boolean,
    args: [
        {
            name: "guild ID",
            description: "The guild to set AFK channel for",
            rest: false,
            type: structures_1.ArgType.Guild,
            required: true,
        },
        {
            name: "channel ID",
            description: "The new AFK channel",
            rest: false,
            type: structures_1.ArgType.Channel,
            check: (i) => i.type === discord_js_1.ChannelType.GuildVoice,
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
        return this.success((await guild.setAFKChannel(channel || null, reason || ctx.reason).catch(() => false)) !== false);
    },
});
//# sourceMappingURL=setGuildAFKChannel.js.map
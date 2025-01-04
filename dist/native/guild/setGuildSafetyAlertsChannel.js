"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$setGuildSafetyAlertsChannel",
    version: "2.1.0",
    description: "Sets the safety alerts channel for a guild, returns bool",
    unwrap: true,
    aliases: [
        "$setServerSafetyAlertsChannel"
    ],
    output: structures_1.ArgType.Boolean,
    args: [
        {
            name: "guild ID",
            description: "The guild to set safety alerts channel for",
            rest: false,
            type: structures_1.ArgType.Guild,
            required: true,
        },
        {
            name: "channel ID",
            description: "The new safety alerts channel",
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
        return this.success((await guild.setSafetyAlertsChannel(channel || null, reason || undefined).catch(() => false)) !== false);
    },
});
//# sourceMappingURL=setGuildSafetyAlertsChannel.js.map
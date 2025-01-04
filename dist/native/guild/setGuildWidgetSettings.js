"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$setGuildWidgetSettings",
    version: "2.1.0",
    description: "Sets the widget settings of a guild, returns bool",
    unwrap: true,
    aliases: [
        "$setServerWidgetSettings"
    ],
    output: structures_1.ArgType.Boolean,
    args: [
        {
            name: "guild ID",
            description: "The guild to set widget settings on",
            rest: false,
            type: structures_1.ArgType.Guild,
            required: true,
        },
        {
            name: "channel ID",
            description: "The invite channel for the widget",
            rest: false,
            type: structures_1.ArgType.Channel,
            check: (i) => (i instanceof discord_js_1.GuildChannel && !(i instanceof discord_js_1.StageChannel) && !(i instanceof discord_js_1.CategoryChannel))
        },
        {
            name: "enabled",
            description: "Whether to enable the widget",
            rest: false,
            type: structures_1.ArgType.Boolean,
        },
        {
            name: "reason",
            description: "The reason for this action",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    brackets: true,
    async execute(ctx, [guild, chan, enabled, reason]) {
        return this.success((await guild.setWidgetSettings({
            channel: chan || null,
            enabled: enabled ?? guild.widgetEnabled ?? false
        }, reason || undefined).catch(() => false)) !== false);
    },
});
//# sourceMappingURL=setGuildWidgetSettings.js.map
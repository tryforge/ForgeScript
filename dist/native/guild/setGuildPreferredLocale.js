"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$setGuildPreferredLocale",
    version: "2.1.0",
    description: "Sets the preferred locale of a guild, returns bool",
    unwrap: true,
    aliases: [
        "$setServerPreferredLocale"
    ],
    output: structures_1.ArgType.Boolean,
    args: [
        {
            name: "guild ID",
            description: "The guild to set preferred locale on",
            rest: false,
            type: structures_1.ArgType.Guild,
            required: true,
        },
        {
            name: "locale",
            description: "The new preferred locale",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: discord_js_1.Locale
        },
        {
            name: "reason",
            description: "The reason for this action",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    brackets: true,
    async execute(ctx, [guild, locale, reason]) {
        return this.success((await guild.setPreferredLocale(locale || null, reason || undefined).catch(() => false)) !== false);
    },
});
//# sourceMappingURL=setGuildPreferredLocale.js.map
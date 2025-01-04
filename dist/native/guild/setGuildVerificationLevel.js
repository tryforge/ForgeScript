"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$setGuildVerificationLevel",
    version: "2.1.0",
    description: "Sets the verification level of a guild, returns bool",
    unwrap: true,
    aliases: [
        "$setServerVerificationLevel"
    ],
    output: structures_1.ArgType.Boolean,
    args: [
        {
            name: "guild ID",
            description: "The guild to set verification level on",
            rest: false,
            type: structures_1.ArgType.Guild,
            required: true,
        },
        {
            name: "level",
            description: "The new verification level",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: discord_js_1.GuildVerificationLevel
        },
        {
            name: "reason",
            description: "The reason for this action",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    brackets: true,
    async execute(ctx, [guild, level, reason]) {
        return this.success((await guild.setVerificationLevel(level || null, reason || undefined).catch(() => false)) !== false);
    },
});
//# sourceMappingURL=setGuildVerificationLevel.js.map
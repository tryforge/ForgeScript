"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$setGuildMFALevel",
    version: "2.1.0",
    description: "Sets the MFA level for a guild, returns bool",
    unwrap: true,
    deprecated: true,
    aliases: [
        "$setServerMFALevel"
    ],
    output: structures_1.ArgType.Boolean,
    args: [
        {
            name: "guild ID",
            description: "The guild to set MFA level for",
            rest: false,
            type: structures_1.ArgType.Guild,
            required: true,
        },
        {
            name: "level",
            description: "The new MFA level",
            rest: false,
            required: true,
            type: structures_1.ArgType.Enum,
            enum: discord_js_1.GuildMFALevel
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
        return this.success((await guild.setMFALevel(level, reason || undefined).catch(() => false)) !== false);
    },
});
//# sourceMappingURL=setGuildMFALevel.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$setGuildBoostProgressBar",
    version: "1.5.0",
    description: "Sets a guild boost progress bar, returns bool",
    aliases: [
        "$setServerBoostProgressBar"
    ],
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to set boost progress bar for",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
        {
            name: "enabled",
            description: "Whether to enable the boost progress bar",
            rest: false,
            required: true,
            type: structures_1.ArgType.Boolean,
        },
        {
            name: "reason",
            description: "The reason for enabling/disabling boost progress bar",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    output: structures_1.ArgType.Boolean,
    async execute(ctx, [guild, enabled, reason]) {
        return this.success((await guild.setPremiumProgressBarEnabled(enabled, reason || undefined).catch(() => false)) !== false);
    },
});
//# sourceMappingURL=setGuildBoostProgressBar.js.map
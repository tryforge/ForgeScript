"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$setGuildAFKTimeout",
    version: "2.1.0",
    description: "Sets the AFK timeout for a guild, returns bool",
    unwrap: true,
    aliases: [
        "$setServerAFKTimeout"
    ],
    output: structures_1.ArgType.Boolean,
    args: [
        {
            name: "guild ID",
            description: "The guild to set AFK timeout for",
            rest: false,
            type: structures_1.ArgType.Guild,
            required: true,
        },
        {
            name: "seconds",
            description: "The new AFK timeout in seconds (60, 300, 900, 1800, 3600)",
            rest: false,
            required: true,
            type: structures_1.ArgType.Number,
        },
        {
            name: "reason",
            description: "The reason for this action",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    brackets: true,
    async execute(ctx, [guild, seconds, reason]) {
        return this.success((await guild.setAFKTimeout(seconds, reason || undefined).catch(() => false)) !== false);
    },
});
//# sourceMappingURL=setGuildAFKTimeout.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$setGuildDiscoverySplash",
    version: "2.1.0",
    description: "Sets the discovery splash for a guild, returns bool",
    unwrap: true,
    aliases: [
        "$setServerDiscoverySplash"
    ],
    output: structures_1.ArgType.Boolean,
    args: [
        {
            name: "guild ID",
            description: "The guild to set discovery splash for",
            rest: false,
            type: structures_1.ArgType.Guild,
            required: true,
        },
        {
            name: "url",
            description: "The new discovery splash",
            rest: false,
            type: structures_1.ArgType.String,
        },
        {
            name: "reason",
            description: "The reason for this action",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    brackets: true,
    async execute(ctx, [guild, icon, reason]) {
        return this.success((await guild.setDiscoverySplash(icon || null, reason || undefined).catch(() => false)) !== false);
    },
});
//# sourceMappingURL=setGuildDiscoverySplash.js.map
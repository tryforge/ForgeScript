"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$setGuildOwner",
    version: "2.1.0",
    description: "Sets the owner of a guild, returns bool",
    unwrap: true,
    deprecated: true,
    aliases: [
        "$setServerOwner"
    ],
    output: structures_1.ArgType.Boolean,
    args: [
        {
            name: "guild ID",
            description: "The guild to set owner on",
            rest: false,
            type: structures_1.ArgType.Guild,
            required: true,
        },
        {
            name: "user ID",
            description: "The new owner",
            rest: false,
            required: true,
            type: structures_1.ArgType.Member,
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
    async execute(ctx, [guild, member, reason]) {
        return this.success((await guild.setOwner(member, reason || undefined).catch(() => false)) !== false);
    },
});
//# sourceMappingURL=setGuildOwner.js.map
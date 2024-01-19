"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$hasPerms",
    version: "1.0.0",
    description: "Returns whether given member has X perms",
    unwrap: true,
    aliases: [
        "$memberHasPerms"
    ],
    brackets: true,
    output: structures_1.ArgType.Boolean,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull member from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
        {
            name: "user ID",
            description: "The user to check for perms",
            rest: false,
            type: structures_1.ArgType.Member,
            required: true,
            pointer: 0,
        },
        {
            name: "perms",
            description: "The perms to check for",
            rest: true,
            type: structures_1.ArgType.String,
            enum: discord_js_1.PermissionFlagsBits,
            required: true,
        },
    ],
    execute(ctx, [, member, perms]) {
        return this.success(member.permissions.has(perms));
    },
});
//# sourceMappingURL=hasPerms.js.map
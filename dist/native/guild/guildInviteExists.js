"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$guildInviteExists",
    version: "2.4.0",
    description: "Returns whether a guild invite code exists",
    aliases: ["$serverInviteExists"],
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull invites from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
        {
            name: "code",
            description: "The invite to check",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    output: structures_1.ArgType.Boolean,
    async execute(ctx, [guild, code]) {
        return this.success((await guild.invites.fetch(code).catch(() => false)) !== false);
    },
});
//# sourceMappingURL=guildInviteExists.js.map
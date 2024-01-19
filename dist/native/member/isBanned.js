"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$isBanned",
    version: "1.0.0",
    brackets: true,
    unwrap: true,
    aliases: [
        "$memberIsBanned"
    ],
    output: structures_1.ArgType.Boolean,
    description: "Whether this user is banned",
    args: [
        {
            name: "guild ID",
            description: "The guild to check bans on",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
        {
            name: "user ID",
            description: "The user to check ban",
            rest: false,
            type: structures_1.ArgType.User,
            required: true,
        },
    ],
    async execute(ctx, [guild, user]) {
        const isBanned = await guild.bans.fetch(user).catch(ctx.noop);
        return this.success(!!isBanned);
    },
});
//# sourceMappingURL=isBanned.js.map
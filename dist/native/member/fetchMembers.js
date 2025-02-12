"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$fetchMembers",
    version: "1.0.0",
    description: "Caches all members of a guild",
    aliases: ["$fetchMember"],
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to cache members of",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
        {
            name: "user ID",
            description: "The member to fetch",
            rest: false,
            type: structures_1.ArgType.Member,
            pointer: 0
        },
    ],
    async execute(ctx, [guild, member]) {
        guild ??= ctx.guild;
        if (member)
            await guild?.members.fetch(member);
        else
            await guild?.members.fetch();
        return this.success();
    },
});
//# sourceMappingURL=fetchMembers.js.map
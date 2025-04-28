"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$memberJoinPosition",
    version: "1.5.0",
    description: "Returns the position at which the member joined the guild",
    unwrap: true,
    brackets: false,
    output: structures_1.ArgType.Number,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull member from",
            rest: false,
            type: structures_1.ArgType.Guild,
            required: true,
        },
        {
            name: "user ID",
            description: "The user to get its join position",
            rest: false,
            pointer: 0,
            type: structures_1.ArgType.Member,
            required: true,
        },
    ],
    execute(ctx, [guild, member]) {
        guild ??= ctx.guild;
        member ??= ctx.member;
        return this.success(guild ? [...guild.members.cache.sort((a, b) => a.joinedTimestamp - b.joinedTimestamp).values()].findIndex(x => x.id === member?.id) + 1 : 0);
    },
});
//# sourceMappingURL=memberJoinPosition.js.map
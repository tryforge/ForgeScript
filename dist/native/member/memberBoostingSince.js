"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$memberBoostingSince",
    version: "1.5.0",
    aliases: [
        "$boostingSince",
        "$boosterSince",
        "$memberBoosterSince",
    ],
    brackets: false,
    unwrap: true,
    output: structures_1.ArgType.Number,
    description: "Returns when the member started boosting the guild",
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
            description: "The user to check boost status for",
            rest: false,
            type: structures_1.ArgType.Member,
            pointer: 0,
            required: true,
        },
    ],
    execute(ctx, [, member]) {
        member ??= ctx.member;
        return this.success(member?.premiumSinceTimestamp || 0);
    },
});
//# sourceMappingURL=memberBoostingSince.js.map
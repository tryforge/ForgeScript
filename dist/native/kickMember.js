"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$kickMember",
    version: "1.0.0",
    description: "Kicks a member from the guild, returns true or false depending on whether the action was successfully performed",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to kick a member from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
        {
            name: "user ID",
            description: "The user to kick",
            rest: false,
            type: structures_1.ArgType.Member,
            pointer: 0,
            required: true,
        },
        {
            name: "reason",
            description: "The reason to kick for",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    async execute(_, [, member, reason]) {
        return this.success((await member.kick(reason || undefined).catch(() => false)) !== false);
    },
});
//# sourceMappingURL=kickMember.js.map
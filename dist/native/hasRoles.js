"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$hasRoles",
    version: "1.1.0",
    description: "Returns whether given member has all roles",
    unwrap: true,
    brackets: true,
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
            description: "The user to check for roles",
            rest: false,
            type: structures_1.ArgType.Member,
            required: true,
            pointer: 0,
        },
        {
            name: "roles",
            description: "The roles to check for",
            rest: true,
            type: structures_1.ArgType.Role,
            required: true,
            pointer: 0
        },
    ],
    execute(_, [, member, roles]) {
        return this.success(member.roles.cache.hasAll(...roles.map(x => x.id)));
    },
});
//# sourceMappingURL=hasRoles.js.map
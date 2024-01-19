"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$memberRemoveRoles",
    version: "1.0.0",
    description: "Removes roles from a member and returns bool",
    unwrap: true,
    brackets: true,
    output: structures_1.ArgType.Boolean,
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
            pointer: 0,
            description: "The user to remove roles from",
            rest: false,
            type: structures_1.ArgType.Member,
            required: true,
        },
        {
            name: "roles",
            description: "The roles to remove",
            rest: true,
            type: structures_1.ArgType.Role,
            pointer: 0,
        },
    ],
    async execute(ctx, [, member, roles]) {
        member ??= ctx.member;
        const d = await member.roles.remove(roles).catch(ctx.noop);
        return this.success(!!d);
    },
});
//# sourceMappingURL=memberRemoveRoles.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$memberAddRoles",
    version: "1.0.0",
    description: "Adds roles to a member and returns bool",
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
            description: "The user to add roles to",
            rest: false,
            type: structures_1.ArgType.Member,
            required: true,
            pointer: 0,
        },
        {
            name: "roles",
            description: "The roles to add",
            rest: true,
            type: structures_1.ArgType.Role,
            pointer: 0,
        },
    ],
    async execute(ctx, [, member, roles]) {
        member ??= ctx.member;
        const d = await member.roles.add(roles).catch(ctx.noop);
        return this.success(!!d);
    },
});
//# sourceMappingURL=memberAddRoles.js.map
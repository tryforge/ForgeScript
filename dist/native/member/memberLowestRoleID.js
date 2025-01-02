"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$memberLowestRoleID",
    version: "1.5.0",
    description: "Returns the lowest role id of a member",
    unwrap: true,
    output: structures_1.ArgType.Role,
    brackets: false,
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
            description: "The user to get its lowest role id",
            rest: false,
            type: structures_1.ArgType.Member,
            required: true,
        },
    ],
    execute(ctx, [guild, member]) {
        guild ??= ctx.guild;
        member ??= ctx.member;
        const lowest = member?.roles.cache.filter(role => role.id !== guild?.id).sort((a, b) => a.position - b.position).first();
        return this.success(lowest?.id ?? guild?.id);
    },
});
//# sourceMappingURL=memberLowestRoleID.js.map
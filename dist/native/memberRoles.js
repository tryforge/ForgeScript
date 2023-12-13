"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$memberRoles",
    version: "1.0.0",
    description: "Returns the role ids of a member",
    unwrap: true,
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
            description: "The user to get roles from",
            rest: false,
            pointer: 0,
            type: structures_1.ArgType.Member,
            required: true,
        },
        {
            name: "separator",
            description: "The separator to use for each role",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    execute(ctx, [, member, sep]) {
        member ??= ctx.member;
        return this.success(member?.roles.cache
            .filter((x) => x.id !== x.guild.id)
            .map((x) => x.id)
            .join(sep || ", "));
    },
});
//# sourceMappingURL=memberRoles.js.map
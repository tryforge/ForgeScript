"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$memberPerms",
    version: "1.0.0",
    description: "Returns the member perms",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "guild ID",
            description: "The guild id to return the member from",
            rest: false,
            type: structures_1.ArgType.Guild,
            required: true,
        },
        {
            name: "user ID",
            description: "The member id to return its perms",
            rest: false,
            type: structures_1.ArgType.Member,
            pointer: 0,
            required: true,
        },
        {
            name: "separator",
            description: "The separator to use for every perm",
            type: structures_1.ArgType.String,
            required: false,
            rest: false,
        },
    ],
    execute(ctx, [, member, sep]) {
        return this.success((member ?? ctx.member)?.permissions.toArray().join(sep || ", "));
    },
});
//# sourceMappingURL=memberPerms.js.map
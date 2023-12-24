"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$roleTags",
    category: "unknown",
    version: "1.3.0",
    description: "Returns all role tags",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "guild ID",
            description: "The guild id to return the role from",
            rest: false,
            type: structures_1.ArgType.Guild,
            required: true,
        },
        {
            name: "role ID",
            description: "The role id return its perms",
            rest: false,
            type: structures_1.ArgType.Role,
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
    execute(ctx, [, r, sep]) {
        r ??= ctx.role;
        return this.success(Object.entries(r.tags ?? {}).filter(x => x[1] === true).map(x => x[0]));
    },
});
//# sourceMappingURL=roleTags.js.map
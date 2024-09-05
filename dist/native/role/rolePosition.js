"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$rolePosition",
    version: "1.0.0",
    description: "Returns the role position",
    brackets: false,
    unwrap: true,
    output: structures_1.ArgType.Number,
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
            description: "The role id return its position",
            rest: false,
            type: structures_1.ArgType.Role,
            pointer: 0,
            required: true,
        },
        {
            name: "asc order",
            description: "Whether to count roles in ascending order (top to bottom)",
            rest: false,
            type: structures_1.ArgType.Boolean,
        },
    ],
    execute(ctx, [guild, role, asc]) {
        return this.success(asc ? guild.roles.cache.size - role.position : role.position);
    },
});
//# sourceMappingURL=rolePosition.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$editRolePerms",
    version: "1.0.7",
    description: "Edits a role's perms, returns boolean",
    unwrap: true,
    output: structures_1.ArgType.Boolean,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull the role from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
        {
            name: "role ID",
            pointer: 0,
            type: structures_1.ArgType.Role,
            description: "The role to edit perms for",
            rest: false,
            required: true,
        },
        {
            name: "perms",
            description: "The new perms for the role",
            rest: true,
            type: structures_1.ArgType.Permission,
            required: true,
        },
    ],
    brackets: true,
    async execute(ctx, [, role, perms]) {
        return this.success(!!(await role.setPermissions(perms).catch(ctx.noop)));
    },
});
//# sourceMappingURL=editRolePerms.js.map
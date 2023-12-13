"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$editRolePerms",
    version: "1.0.7",
    description: "Edits a role's perms, returns boolean",
    unwrap: true,
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
    async execute(_, [, role, perms]) {
        return this.success(!!(await role.setPermissions(perms).catch(lodash_1.noop)));
    },
});
//# sourceMappingURL=editRolePerms.js.map
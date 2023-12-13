"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$editRoleName",
    version: "1.0.7",
    description: "Edits a role's name, returns boolean",
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
            description: "The role to edit name for",
            rest: false,
            required: true,
        },
        {
            name: "name",
            description: "The new name for the role",
            rest: false,
            type: structures_1.ArgType.String,
            required: true,
        },
    ],
    brackets: true,
    async execute(_, [, role, name]) {
        return this.success(!!(await role.setName(name).catch(lodash_1.noop)));
    },
});
//# sourceMappingURL=editRoleName.js.map
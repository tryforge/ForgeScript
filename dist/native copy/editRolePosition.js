"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$editRolePosition",
    version: "1.0.7",
    description: "Edits a role's position, returns boolean",
    unwrap: true,
    brackets: true,
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
            description: "The role to edit position for",
            rest: false,
            required: true,
        },
        {
            name: "position",
            description: "The new position for the role",
            rest: false,
            type: structures_1.ArgType.Number,
            required: true,
        },
    ],
    async execute(_, [, role, pos]) {
        return this.success(!!(await role.setPosition(pos).catch(lodash_1.noop)));
    },
});
//# sourceMappingURL=editRolePosition.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$editRoleIcon",
    description: "Edits a role's icon, returns boolean",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull the role from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild
        },
        {
            name: "role ID",
            pointer: 0,
            type: structures_1.ArgType.Role,
            description: "The role to edit icon for",
            rest: false,
            required: true
        },
        {
            name: "icon",
            description: "The new icon for the role",
            rest: false,
            type: structures_1.ArgType.String,
            required: true
        }
    ],
    async execute(ctx, [, role, url]) {
        return structures_1.Return.success(!!(await role.setIcon(url).catch(lodash_1.noop)));
    },
});
//# sourceMappingURL=editRoleIcon.js.map
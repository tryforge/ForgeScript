"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$editRole",
    version: "1.0.7",
    description: "Edits role data, returns boolean",
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
            description: "The role to edit data",
            rest: false,
            required: true,
        },
        {
            name: "role name",
            description: "The new role name, leave empty to not modify",
            rest: false,
            type: structures_1.ArgType.String,
        },
        {
            name: "role color",
            description: "The new role color, leave empty to not modify",
            rest: false,
            type: structures_1.ArgType.String,
        },
        {
            name: "role icon",
            description: "The new role icon, leave empty to not modify",
            rest: false,
            type: structures_1.ArgType.String,
        },
        {
            name: "hoisted",
            description: "Whether the role is hoisted, leave empty to not modify",
            rest: false,
            type: structures_1.ArgType.Boolean,
        },
        {
            name: "mentionable",
            description: "Whether the role can be mentioned, leave empty to not modify",
            rest: false,
            type: structures_1.ArgType.Boolean,
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
    async execute(_, [, role, name, color, icon, hoist, mentionable, perms]) {
        return this.success(!!(await role
            .edit({
            color: color || undefined,
            hoist: hoist || undefined,
            icon: icon || undefined,
            mentionable: mentionable || undefined,
            name: name || undefined,
            permissions: perms || undefined,
        })
            .catch(lodash_1.noop)));
    },
});
//# sourceMappingURL=editRole.js.map
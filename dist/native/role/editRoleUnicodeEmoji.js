"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$editRoleUnicodeEmoji",
    version: "1.5.0",
    description: "Edits a role's unicode emoji, returns boolean",
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
            description: "The role to edit unicode emoji for",
            rest: false,
            required: true,
        },
        {
            name: "emoji",
            description: "The new unicode emoji for the role",
            rest: false,
            type: structures_1.ArgType.String,
            required: true,
        },
    ],
    brackets: true,
    async execute(ctx, [, role, emoji]) {
        return this.success(!!(await role.setUnicodeEmoji(emoji).catch(ctx.noop)));
    },
});
//# sourceMappingURL=editRoleUnicodeEmoji.js.map
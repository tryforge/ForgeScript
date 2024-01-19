"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$deleteRoles",
    version: "1.0.0",
    brackets: true,
    unwrap: true,
    output: structures_1.ArgType.Number,
    description: "Delete given role ids, returns the count of roles deleted",
    args: [
        {
            name: "guild ID",
            description: "The guild to delete roles from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
        {
            name: "roles",
            description: "The roles to delete",
            rest: true,
            required: true,
            pointer: 0,
            type: structures_1.ArgType.Role,
        },
    ],
    async execute(ctx, [, roles]) {
        let count = 0;
        for (let i = 0, len = roles.length; i < len; i++) {
            const role = roles[i];
            const success = await role.delete().catch(ctx.noop);
            if (success)
                count++;
        }
        return this.success(count);
    },
});
//# sourceMappingURL=deleteRoles.js.map